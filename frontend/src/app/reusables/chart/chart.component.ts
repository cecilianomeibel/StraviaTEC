import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {

  @Input() carrera!: any; //Cambiar any a Race

  datos: any[] = [
    { posicion: 1, participante: 'Juan', tiempo: '10 seg' },
    { posicion: 2, participante: 'María', tiempo: '20 seg' },
    { posicion: 3, participante: 'Carlos', tiempo: '30 seg' }
  ];
  
  // Función para llenar la tabla de forma iterativa
  ngOnInit() {
    // Función para llenar la tabla de forma iterativa
      const tablaBody = document.getElementById('tablaBody');
    
      if (tablaBody) {
        // Limpiar contenido existente en la tabla
        tablaBody.innerHTML = '';
    
        // Iterar sobre los datos y agregar filas a la tabla
        this.datos.forEach((dato: any) => {
          const fila = document.createElement('tr');
          
          const celdaPosicion = document.createElement('td');
          celdaPosicion.textContent = dato.posicion;
          fila.appendChild(celdaPosicion);
    
          const celdaParticipante = document.createElement('td');
          celdaParticipante.textContent = dato.participante;
          fila.appendChild(celdaParticipante);
    
          const celdaTiempo = document.createElement('td');
          celdaTiempo.textContent = dato.tiempo;
          fila.appendChild(celdaTiempo);
    
          // Agregar la fila a la tabla
          tablaBody.appendChild(fila);
        });
      }
    }

}
