import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-join-group',
  templateUrl: './join-group.component.html',
  styleUrls: ['./join-group.component.css']
})
export class JoinGroupComponent {
  constructor(
    private router: Router
  ){}

  goHome(){
    this.router.navigate(['/']);
  }

}
