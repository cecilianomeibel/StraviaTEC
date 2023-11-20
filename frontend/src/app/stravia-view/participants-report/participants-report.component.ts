import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Race } from 'src/app/Interfaces/race';
import { SportmanSignedRace } from 'src/app/Interfaces/sportmanSignedRace';
import { ApiService } from 'src/app/Services/api-service';

@Component({
  selector: 'app-participants-report',
  templateUrl: './participants-report.component.html',
  styleUrls: ['./participants-report.component.css']
})
export class ParticipantsReportComponent {

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
  RaceId: any;

  ngOnInit(){
    //Obtener parametro de la pagina anterior (username)
    this.route.queryParams.subscribe((params) => {
      this.RaceId = params['RaceId'];
      if (this.RaceId) {
        this.loadRace(this.RaceId);
      }
    });
  }

  loadRace(idRace: number){
    this.RaceApi.getById('Race', idRace).subscribe(
      (Race: Race[]) => {
        this.Race = Race;
        console.log(Race)
        this.RacesList.push(this.Race); //agregar carrera a la lista de retos del usuario
        this.loadParticipants(idRace)
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


