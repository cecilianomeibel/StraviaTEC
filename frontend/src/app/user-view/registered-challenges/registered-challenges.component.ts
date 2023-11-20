import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Activity } from 'src/app/Interfaces/activity';
import { ActivityByChallenge } from 'src/app/Interfaces/activityByChalleneg';
import { Challenge } from 'src/app/Interfaces/challenge';
import { SportmanByChallenge } from 'src/app/Interfaces/sportmanByChallenge';
import { ApiService } from 'src/app/Services/api-service';

@Component({
  selector: 'app-registered-challenges',
  templateUrl: './registered-challenges.component.html',
  styleUrls: ['./registered-challenges.component.css']
})
export class RegisteredChallengesComponent {

  constructor(
    private ChallengeApi: ApiService<Challenge>,
    private ChallengeXSportmanApi: ApiService<SportmanByChallenge>,
    private route: ActivatedRoute
  ){}

  username: any;
  userChallenges:any;
  challenge: any;
  challengesList: any[] = [];

  ngOnInit(){
    //Obtener parametro de la pagina anterior (username)
    this.route.queryParams.subscribe((params) => {
      this.username = params['username'];
      if (this.username) {
        this.loadUserChallenges(this.username);
      }
    });
  }

  loadUserChallenges(username: any){
    //Obtener retos asignados a ese usuario
    console.log('in', username)
    this.ChallengeXSportmanApi.getById('SportmanByChallenge', username).subscribe(
      (userChallenges: SportmanByChallenge[]) => {
        this.userChallenges = userChallenges;
        console.log(this.userChallenges)

        for (let i = 0; i < this.userChallenges.length; i++) {
          const idChallenge = this.userChallenges[i].idChallenge;
          this.loadChallenge(idChallenge);
        }
      },
      (error: any) => {
        console.error('Error fetching user on activities', error);
      }
    );
  }

  loadChallenge(idChallenge: any){
    this.ChallengeApi.getById('Challenge', idChallenge).subscribe(
      (challenge: Challenge[]) => {
        this.challenge = challenge;
        console.log(challenge)
        this.challengesList.push(this.challenge); //agregar reto a la lista de retos del usuario
      },
      (error: any) => {
        console.error('Error fetching challenge', error);
      }
    );
  }

}
