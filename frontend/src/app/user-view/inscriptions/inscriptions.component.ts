import { Component } from '@angular/core';
import { Challenge } from 'src/app/Interfaces/challenge';
import { Race } from 'src/app/Interfaces/race';
import { ApiService } from 'src/app/Services/api-service';

@Component({
  selector: 'app-inscriptions',
  templateUrl: './inscriptions.component.html',
  styleUrls: ['./inscriptions.component.css']
})
export class InscriptionsComponent {
  selectedActivity: any;
  racesList: any;
  challengesList: any;
  constructor(private RaceApi: ApiService<Race>, private ChallengeApi: ApiService<Challenge>) {

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

}
