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
    private ActivityByChallengeApi: ApiService<ActivityByChallenge>,
    private ChallengeApi: ApiService<Challenge>,
    private ChallengeXSportmanApi: ApiService<SportmanByChallenge>,
    private route: ActivatedRoute
  ){}

  username: any;
  userChallenges:any;
  userActivities: any;
  challenge: any;

  ngOnInit(){
    //Obtener parametro de la pagina anterior (username)
    this.route.queryParams.subscribe((params) => {
      this.username = params['username'];
      if (this.username) {
        this.loadUserChallenges();
        console.log(this.username)
      }
    });
  }

  loadUserChallenges(){
    //Obtener retos asignados a ese usuario
    this.ChallengeXSportmanApi.getById('SportmanByChallenge', this.username).subscribe(
      (userChallenges: SportmanByChallenge[]) => {
        this.userChallenges = userChallenges;

        for (let i = 0; i < this.userChallenges.length; i++) {
          this.loadActivityByChallenge(this.userChallenges[i].idActivity);
        }
      },
      (error: any) => {
        console.error('Error fetching user on activities', error);
      }
    );
  }

  loadActivityByChallenge(idActivity: any){
    this.ActivityByChallengeApi.getById('ActivityByChallenge', idActivity).subscribe(
      (userAcitivities: ActivityByChallenge[]) => {
        this.userActivities = userAcitivities;
        this.loadChallenge(this.userActivities.idChallenge)
      },
      (error: any) => {
        console.error('Error fetching activity' + this.userActivities, error);
      }
    );
  }

  loadChallenge(idChallenge: any){
    this.ChallengeApi.getById('Challenge', idChallenge).subscribe(
      (challenge: Challenge[]) => {
        this.challenge = challenge;
      },
      (error: any) => {
        console.error('Error fetching challenge', error);
      }
    );
  }

}
