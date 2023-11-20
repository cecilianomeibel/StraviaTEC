import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
import { RouterOutlet, RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { Sportman } from 'src/app/Interfaces/sportmain';
import { ApiService } from 'src/app/Services/api-service';
import { FormsModule } from '@angular/forms';
import { ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent {
  static foundAthletes: Sportman[] = [];
  @ViewChild('searchInput') searchInput!: ElementRef;
 
  athletes: Sportman[] = [];
  constructor(private router: Router, private athleteApi: ApiService<Sportman>) { }

  listAthletes() {
    this.router.navigate(['/app-athlete-list']);
  }

  inscription() {
    this.router.navigate(['/app-inscriptions']);
  }
  contact() {
    this.router.navigate(['/app-contact']);
  }

}
