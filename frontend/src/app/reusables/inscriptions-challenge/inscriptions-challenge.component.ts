import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscriptions-challenge',
  templateUrl: './inscriptions-challenge.component.html',
  styleUrls: ['./inscriptions-challenge.component.css']
})
export class InscriptionsChallengeComponent {
  @Input() inscriptionC!: {    
    id: number;
    activityType: string;
    name: string;
    period: string;
    type: string;
    access: string;};

  constructor(
    private router: Router
  ){}

  inscription() {

  }
}
