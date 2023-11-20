import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-registered-challenge-card',
  templateUrl: './registered-challenge-card.component.html',
  styleUrls: ['./registered-challenge-card.component.css']
})
export class RegisteredChallengeCardComponent {
  @Input() challenge!: {    
    id: number,
    activityType: string,
    name: string,
    period: string,
    type: string,
    access: string
  }

  daysleft:any;

  ngOnInit(){
    this.tiempoRestante(this.challenge.period);
  }

  tiempoRestante(final:string){
    // Fecha de finalización
    const fechaFinalizacionString = final;
    const fechaFinalizacion = new Date(fechaFinalizacionString);

    // Fecha actual
    const fechaActual = new Date();

    // Calcula la diferencia en milisegundos
    const diferenciaEnMilisegundos = fechaFinalizacion.getTime() - fechaActual.getTime();

    // Convierte la diferencia a días
    const diasFaltantes = Math.ceil(diferenciaEnMilisegundos / (1000 * 60 * 60 * 24));

    this.daysleft = diasFaltantes;

  }
}

