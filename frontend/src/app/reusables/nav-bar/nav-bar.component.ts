import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
import { RouterOutlet, RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor(private router: Router) { }
  loginUser() {
    this.router.navigate(['']);
  }
  promotions() {
    this.router.navigate(['']);
  }
  contact() {
    this.router.navigate(['']);
  }

  goBack() {
    this.router.navigate(['/']);
  }

}
