import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {

  @Input() carrera!: {
    id: number;
    idActivity: number;
    activityType: string;
    cost: number;
    bankAccount: string;
    name:string;
    access:string
  }; 

  @Input() participantes!: {
    idRace: number;
    usernameSportman: string;
  }[];
  
  // Función para llenar la tabla de forma iterativa
  ngOnInit() {
    const tablaBody = document.getElementById('tablaBody');
  
    if (tablaBody && this.participantes) {
      // Limpiar contenido existente en la tabla
      tablaBody.innerHTML = '';
  
      // Iterar sobre los participantes y agregar filas a la tabla
      this.participantes.forEach((participante: any) => {
        const fila = document.createElement('tr');
        
        const celdaPosicion = document.createElement('td');
        celdaPosicion.textContent = participante.idRace.toString(); //modificar a posicion
        fila.appendChild(celdaPosicion);
  
        const celdaParticipante = document.createElement('td');
        celdaParticipante.textContent = participante.usernameSportman;
        fila.appendChild(celdaParticipante);
        
        tablaBody.appendChild(fila);
      });
    }
  }
  
  

}
