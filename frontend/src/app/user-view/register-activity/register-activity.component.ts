import { Component } from '@angular/core';

@Component({
  selector: 'app-register-activity',
  templateUrl: './register-activity.component.html',
  styleUrls: ['./register-activity.component.css']
})
export class RegisterActivityComponent {
  selectedDay: any;
  selectedMonth: any;
  selectedActivity: any;
  selectedEvent:any;

  months: { value: number; name: string }[] = [
    { value: 1, name: 'Enero' },
    { value: 2, name: 'Febrero' },
    { value: 3, name: 'Marzo' },
    { value: 4, name: 'Abril' },
    { value: 5, name: 'Mayo' },
    { value: 6, name: 'Junio' },
    { value: 7, name: 'Julio' },
    { value: 8, name: 'Agosto' },
    { value: 9, name: 'Septiembre' },
    { value: 10, name: 'Octubre' },
    { value: 11, name: 'Noviembre' },
    { value: 12, name: 'Diciembre' },
  ];

  days: number[] = Array.from({ length: 31 }, (_, i) => i + 1);

  activities: {type: string}[] = [
    {type: "Correr"},
    {type: "Nadar"},
    {type: "Ciclismo"},
    {type: "Senderismo"},
    {type: "Kayak"},
    {type: "Caminata"}
  ]

  events: any;



}
