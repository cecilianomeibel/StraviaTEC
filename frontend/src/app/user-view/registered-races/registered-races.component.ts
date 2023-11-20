import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Race } from 'src/app/Interfaces/race';
import { SportmanSignedRace } from 'src/app/Interfaces/sportmanSignedRace';
import { ApiService } from 'src/app/Services/api-service';

@Component({
  selector: 'app-registered-races',
  templateUrl: './registered-races.component.html',
  styleUrls: ['./registered-races.component.css']
})
export class RegisteredRacesComponent {

  constructor(
    private RaceApi: ApiService<Race>,
    private SportmanSignedRaceApi: ApiService<SportmanSignedRace>,
    private route: ActivatedRoute
  ){}

  username: any;
  userRaces: any;
  Race:any;
  RacesList:any[] = [];
  Participants: any;

  ngOnInit(){
    //Obtener parametro de la pagina anterior (username)
    this.route.queryParams.subscribe((params) => {
      this.username = params['username'];
      if (this.username) {
        this.loadUserRaces(this.username);
      }
    });
  }

  loadUserRaces(username:string){
    this.SportmanSignedRaceApi.getById('SportmanSignedRace/ByUsername', username).subscribe(
      (userRaces: SportmanSignedRace[]) => {
        this.userRaces = userRaces;
        console.log(this.userRaces)

        for (let i = 0; i < this.userRaces.length; i++) {
          const idRace = this.userRaces[i].idRace;
          this.loadRace(idRace);
          this.loadParticipants(idRace);
        }
      },
      (error: any) => {
        console.error('Error fetching user on races', error);
      }
    );
  }

  loadRace(idRace: number){
    this.RaceApi.getById('Race', idRace).subscribe(
      (Race: Race[]) => {
        this.Race = Race;
        console.log(Race)
        this.RacesList.push(this.Race); //agregar carrera a la lista de retos del usuario
      },
      (error: any) => {
        console.error('Error fetching Race', error);
      }
    );
  }

  loadParticipants(idRace: number){
    this.SportmanSignedRaceApi.getById('SportmanSignedRace/ByRace', idRace).subscribe(
      (Participants: SportmanSignedRace[]) => {
        this.Participants = Participants;
        console.log(this.Participants)
      },
      (error: any) => {
        console.error('Error fetching user on participants', error);
      }
    );
  }
}

