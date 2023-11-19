import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Challenge } from 'src/app/Interfaces/challenge';
import { Race } from 'src/app/Interfaces/race';
import { ApiService } from 'src/app/Services/api-service';

@Component({
  selector: 'app-register-activity',
  templateUrl: './register-activity.component.html',
  styleUrls: ['./register-activity.component.css']
})
export class RegisterActivityComponent {
  selectedActivity: any;
  registerForm: any;
  racesList: Race[] = [];
  challengesList: Challenge[] = [];
  belongsTo: any;

  activities: {type: string}[] = [
    {type: "Correr"},
    {type: "Nadar"},
    {type: "Ciclismo"},
    {type: "Senderismo"},
    {type: "Kayak"},
    {type: "Caminata"}
  ]

  events: any;
  selectedEvent: any;

  constructor(private fb: FormBuilder, private RaceApi: ApiService<Race>, private ChallengeApi: ApiService<Challenge>) {
    this.registerForm = this.fb.group({
    fecha: ['', Validators.required],
    hora: ['', Validators.required],
    duracion: ['', Validators.required],
    tipoActividad: ['', Validators.required],
    kilometraje:['', Validators.required],
    nombreEvento:['', Validators.required]
  });
}

  ngOnInit(){
      this.RaceApi.getAll('Race').subscribe(
        (listaCarreras: Race[]) => {
          this.racesList = listaCarreras;
        },
        (error: any) => {
          console.error('Error fetching races:', error);
        }
      );
      this.ChallengeApi.getAll('Challenge').subscribe(
        (listaRetos: Challenge[]) => {
          this.challengesList = listaRetos;
        },
        (error: any) => {
          console.error('Error fetching challenges:', error);
        }
      );
  }
  
  registerActivity(){
    console.log(this.registerForm.value)
  }



}
