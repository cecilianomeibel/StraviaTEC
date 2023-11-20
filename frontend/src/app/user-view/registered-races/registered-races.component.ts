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
    private ChallengeApi: ApiService<Race>,
    private ChallengeXSportmanApi: ApiService<SportmanSignedRace>,
    private route: ActivatedRoute
  ){}

  username: any;

  ngOnInit(){
    //Obtener parametro de la pagina anterior (username)
    this.route.queryParams.subscribe((params) => {
      this.username = params['username'];
      if (this.username) {
        //this.loadUserChallenges(this.username);
      }
    });
  }
}
