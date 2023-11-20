package ac.cr.tec.stravatec

import android.location.Location
import com.google.android.gms.location.FusedLocationProviderClient
import com.google.android.gms.location.LocationCallback
import com.google.android.gms.location.LocationRequest
import com.google.android.gms.location.LocationResult
import com.google.android.gms.location.LocationServices
import com.google.android.gms.maps.CameraUpdateFactory
import com.google.android.gms.maps.GoogleMap
import com.google.android.gms.maps.OnMapReadyCallback
import com.google.android.gms.maps.SupportMapFragment
import com.google.android.gms.maps.model.LatLng
import com.google.android.gms.maps.model.PolylineOptions
import android.os.SystemClock
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import androidx.core.app.ActivityCompat
import ac.cr.tec.stravatec.databinding.ActivityMainBinding
import android.view.View
import android.widget.Button
import android.widget.Chronometer
import android.widget.TextView
import android.Manifest
import android.content.pm.PackageManager
import android.graphics.Color
import android.widget.Toast
import java.io.File
import java.io.FileWriter
import java.text.SimpleDateFormat
import java.util.Date
import java.util.Locale


class MainActivity : AppCompatActivity(), OnMapReadyCallback {

    private lateinit var mMap: GoogleMap
    private lateinit var binding: ActivityMainBinding
    private lateinit var mileageTextView: TextView
    private lateinit var chronometer: Chronometer
    private lateinit var startButton: Button
    private lateinit var pauseButton: Button
    private lateinit var stopButton: Button
    private lateinit var clearButton: Button
    private lateinit var exportButton: Button



    private val fusedLocationClient by lazy {
        LocationServices.getFusedLocationProviderClient(this)
    }

    private val polylineOptions = PolylineOptions().width(5f).color(Color.RED)
    private var isTracking = false
    private var isChronometerRunning = false

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        mileageTextView = binding.mileageTV
        chronometer = binding.chronometer
        startButton = binding.startBttn
        pauseButton = binding.pauseBttn
        stopButton = binding.finishBttn
        exportButton = binding.exportBttn

        val mapFragment =
            supportFragmentManager.findFragmentById(R.id.map) as SupportMapFragment
        mapFragment.getMapAsync(this)

        binding.pauseBttn.visibility = View.INVISIBLE
        binding.resumeBttn.visibility = View.INVISIBLE

        ActivityCompat.requestPermissions(
            this,
            arrayOf(Manifest.permission.ACCESS_FINE_LOCATION),
            PackageManager.PERMISSION_GRANTED
        )
        ActivityCompat.requestPermissions(
            this,
            arrayOf(Manifest.permission.ACCESS_COARSE_LOCATION),
            PackageManager.PERMISSION_GRANTED
        )

        initUI()
    }

    private fun initUI() {
        startButton.setOnClickListener {
            isTracking = true
            startLocationUpdates()
            if (!isChronometerRunning) {
                chronometer.base = SystemClock.elapsedRealtime()
                isChronometerRunning = true
            }
            chronometer.start()
            updateButtonVisibility()
        }

        pauseButton.setOnClickListener {
            isTracking = false
            chronometer.stop()
            isChronometerRunning = false
            updateButtonVisibility()
        }

        stopButton.setOnClickListener {
            isTracking = false
            chronometer.base = SystemClock.elapsedRealtime()
            chronometer.stop()
            isChronometerRunning = false
            clearPolyline()
            updateButtonVisibility()
        }


        exportButton.setOnClickListener {
            exportGpxFile()        }
    }

    private fun exportGpxFile() {
        if (polylineOptions.points.isNotEmpty()) {
            if (isExternalStorageWritable()) {
                val gpxFile = createGpxFile()
                writeGpxData(gpxFile)
                Toast.makeText(this, "GPX file exported successfully", Toast.LENGTH_SHORT).show()
            } else {
                Toast.makeText(this, "External storage not available", Toast.LENGTH_SHORT).show()
            }
        } else {
            Toast.makeText(this, "No data to export", Toast.LENGTH_SHORT).show()
        }
    }

    private fun isExternalStorageWritable(): Boolean {
        val state = android.os.Environment.getExternalStorageState()
        return android.os.Environment.MEDIA_MOUNTED == state
    }

    private fun createGpxFile(): File {
        val dateFormat = SimpleDateFormat("yyyyMMdd_HHmmss", Locale.getDefault())
        val currentTimeStamp = dateFormat.format(Date())
        val directory =
            android.os.Environment.getExternalStoragePublicDirectory(android.os.Environment.DIRECTORY_DOWNLOADS)
        return File(directory, "Track_$currentTimeStamp.gpx")
    }

    private fun writeGpxData(gpxFile: File) {
        try {
            val writer = FileWriter(gpxFile)
            writer.append("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n")
            writer.append("<gpx version=\"1.1\" creator=\"YourAppName\">\n")
            writer.append("  <trk>\n")
            writer.append("    <trkseg>\n")

            for (point in polylineOptions.points) {
                writer.append("      <trkpt lat=\"${point.latitude}\" lon=\"${point.longitude}\">\n")
                writer.append("      </trkpt>\n")
            }

            writer.append("    </trkseg>\n")
            writer.append("  </trk>\n")
            writer.append("</gpx>\n")
            writer.flush()
            writer.close()
        } catch (e: Exception) {
            e.printStackTrace()
            Toast.makeText(this, "Error exporting GPX file", Toast.LENGTH_SHORT).show()
        }
    }

    private fun updateButtonVisibility() {
        startButton.visibility = if (isTracking) View.INVISIBLE else View.VISIBLE
        pauseButton.visibility = if (isTracking) View.VISIBLE else View.INVISIBLE
        stopButton.visibility = if (isTracking) View.VISIBLE else View.INVISIBLE
    }

    private fun startLocationUpdates() {
        if (checkLocationPermission()) {
            fusedLocationClient.requestLocationUpdates(
                createLocationRequest(),
                locationCallback,
                null
            )
        } else {
            showPermissionErrorMessage()
        }
    }

    private fun checkLocationPermission(): Boolean {
        return ActivityCompat.checkSelfPermission(
            this,
            Manifest.permission.ACCESS_FINE_LOCATION
        ) == PackageManager.PERMISSION_GRANTED
    }

    private fun showPermissionErrorMessage() {
        Toast.makeText(
            this,
            "Location permission is required for tracking. Please grant the permission in the app settings.",
            Toast.LENGTH_LONG
        ).show()
    }





    private fun createLocationRequest(): LocationRequest {
        return LocationRequest.create().apply {
            interval = 1000 // 1 second
            fastestInterval = 500 // 0.5 seconds
            priority = LocationRequest.PRIORITY_HIGH_ACCURACY
        }
    }

    private val locationCallback = object : LocationCallback() {
        override fun onLocationResult(locationResult: LocationResult) {
            if (isTracking) {
                for (location in locationResult.locations) {
                    updateMap(location)
                }
            }
        }
    }

    private fun updateMap(location: Location) {
        val latLng = LatLng(location.latitude, location.longitude)
        polylineOptions.add(latLng)
        mMap.clear()
        mMap.addPolyline(polylineOptions)
        mMap.animateCamera(CameraUpdateFactory.newLatLngZoom(latLng, 15f))
    }

    private fun clearPolyline() {
        polylineOptions.points.clear()
        mMap.clear()
    }

    override fun onMapReady(googleMap: GoogleMap) {
        mMap = googleMap
        mMap.uiSettings.isZoomControlsEnabled = true

    }
}
