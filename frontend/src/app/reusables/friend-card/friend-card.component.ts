import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'friend-card',
  templateUrl: './friend-card.component.html',
  styleUrls: ['./friend-card.component.css'],
})
export class FriendCardComponent {
  @Input() activity!: {    
    id: number;
    idSportman: string; //usuario
    activityName: string;
    dateAndTime: string;
    mileage: number;
    gpx: string;
    eventType: string;
    duration: string};

  constructor(
    private router: Router
  ){}

  viewComments(){
    this.router.navigate(['/app-comment']);
  }
}
