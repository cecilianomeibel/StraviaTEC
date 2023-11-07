/*
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

}
*/



import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: any;
  constructor(private router: Router) {

  }
  /*
    constructor(
      private api: ApiService<LoginRequest>,
      private router: Router,
      private fb: FormBuilder
    ) {
      this.loginForm = this.fb.group({
        email: ['', Validators.required],
        password: ['', Validators.required],
      });
    }
    */


  newAccount() {
    this.router.navigate(['/app-new-account']);
  }

  home() {
    this.router.navigate(['/']);
  }
}
