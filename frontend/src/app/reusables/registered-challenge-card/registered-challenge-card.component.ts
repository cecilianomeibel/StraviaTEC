import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-registered-challenge-card',
  templateUrl: './registered-challenge-card.component.html',
  styleUrls: ['./registered-challenge-card.component.css']
})
export class RegisteredChallengeCardComponent {
  @Input() challenge!: {    
    id: number,
    activityName: string,
    name: string,
    period: string,
    type: string,
    access: string
  }
}
