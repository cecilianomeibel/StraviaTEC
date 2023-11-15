import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent {
  registeredSelect: any;

  constructor(
    private router: Router
  ){}

  registerActivity(){
    this.router.navigate(['/app-register-activity']);
  }

  joinGroup(){
    this.router.navigate(['/app-join-group']);
  }

  getRegisteredEvent(){
    if(this.registeredSelect == "Carreras"){
      this.router.navigate(['/app-registered-races']);
    }else if(this.registeredSelect == "Retos"){
      this.router.navigate(['/']);
    }
  }

}
