using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using System.Data;
using WebAPI.Models;
using WebAPI.Utils;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ActivityController : ControllerBase
    {
        private readonly SqlServerConnector _sqlServerConnector;

        public ActivityController(SqlServerConnector sqlServerConnector)
        {
            _sqlServerConnector = sqlServerConnector;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllActivity()
        {
            // Asegúrate de que el nombre del stored procedure sea correcto
            string storedProcedureName = "SP_ACTIVITY_CRUD";

            // Crea los parámetros necesarios para el stored procedure
            SqlParameter[] parameters = new SqlParameter[]
            {
            new SqlParameter("@statementType", "ReadAll"),
            new SqlParameter("@id", DBNull.Value)  // Agrega un parámetro @id con un valor predeterminado
            };

            // Ejecuta el stored procedure y devuelve la lista de Activity
            List<Activity> activity = await _sqlServerConnector.ExecuteStoredProcedureListAsync<Activity>(storedProcedureName, parameters);
            return Ok(activity);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetActivityById(int id)
        {
            // Asegúrate de que el nombre del stored procedure sea correcto
            string storedProcedureName = "SP_ACTIVITY_CRUD";

            // Crea los parámetros necesarios para el stored procedure
            SqlParameter[] parameters = new SqlParameter[]
            {
            new SqlParameter("@statementType", "ReadOnlyOne"),
            new SqlParameter("@id", id)
            };

            // Ejecuta el stored procedure y devuelve la Activity con el id proporcionado
            Activity activity = await _sqlServerConnector.ExecuteStoredProcedureSingleAsync<Activity>(storedProcedureName, parameters);

            if (activity == null)
            {
                return NotFound();
            }
            return Ok(activity);
        }

        [HttpPost]
        public async Task<IActionResult> CreateActivity([FromBody] Activity activity)
        {
            string storedProcedureName = "SP_ACTIVITY_CRUD";

            // Define the output parameter for ID
            SqlParameter idParameter = new SqlParameter
            {
                ParameterName = "@id",
                SqlDbType = SqlDbType.Int,
                Direction = ParameterDirection.Output
            };

            SqlParameter[] parameters = new SqlParameter[]
            {
            new SqlParameter("@statementType", "Create"),
            idParameter,  // Use the output parameter here
            new SqlParameter("@activityType", activity.activityType),
            new SqlParameter("@dateAndTime", activity.dateAndTime),
            new SqlParameter("@mileage", activity.mileage),
            new SqlParameter("@gpx", activity.gpx),
            new SqlParameter("@eventType", activity.eventType),
            new SqlParameter("@duration", activity.duration),
            };

            // Execute the stored procedure
            await _sqlServerConnector.ExecuteStoredProcedureSingleAsync<object>(storedProcedureName, parameters);

            // Retrieve the ID from the output parameter
            int createdActivityId = Convert.ToInt32(idParameter.Value);

            // Optionally, you can query the database to get the complete object using the created ID
            // var createdActivity = await _dbContext.ACTIVITY.FindAsync(createdActivityId);

            // Return the ID or the complete object based on your requirements
            return Ok(createdActivityId);
        }



        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateActivity(int id, [FromBody] Activity activity)
        {
            // Asegúrate de que el nombre del stored procedure sea correcto
            string storedProcedureName = "SP_ACTIVITY_CRUD";

            // Crea los parámetros necesarios para el stored procedure
            SqlParameter[] parameters = new SqlParameter[]
            {
            
            new SqlParameter("@statementType", "Update"),
            new SqlParameter("@id", id),
            new SqlParameter("@activityType", activity.activityType),
            new SqlParameter("@dateAndTime", activity.dateAndTime),
            new SqlParameter("@mileage", activity.mileage),
            new SqlParameter("@gpx", activity.gpx),
            new SqlParameter("@eventType", activity.eventType),
            new SqlParameter("@duration", activity.duration),
            };

            // Ejecuta el stored procedure y devuelve la respuesta
            await _sqlServerConnector.ExecuteStoredProcedureSingleAsync<object>(storedProcedureName, parameters);
            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteActivity(int id)
        {
            // Asegúrate de que el nombre del stored procedure sea correcto
            string storedProcedureName = "SP_ACTIVITY_CRUD";

            // Crea los parámetros necesarios para el stored procedure
            SqlParameter[] parameters = new SqlParameter[]
            {
            new SqlParameter("@statementType", "Delete"),
            new SqlParameter("@id", id)
            };

            // Ejecuta el stored procedure y devuelve la respuesta
            await _sqlServerConnector.ExecuteStoredProcedureSingleAsync<object>(storedProcedureName, parameters);
            return Ok();
        }
    }
}
