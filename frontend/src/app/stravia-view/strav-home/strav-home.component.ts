import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-strav-home',
  templateUrl: './strav-home.component.html',
  styleUrls: ['./strav-home.component.css']
})
export class StravHomeComponent {
  constructor(private router: Router) { }


  manageRace() {
    this.router.navigate(['/app-manage-race']);
  }

  manageChallenge() {
    this.router.navigate(['/app-manage-challenge']);
  }

  validation() {
    this.router.navigate(['/']);
  }

  manageGroups() {
    this.router.navigate(['/app-manage-group']);
  }
  participantReport() {
    this.router.navigate(['/']);
  }
  PositionRace() {
    this.router.navigate(['/']);
  }

}
