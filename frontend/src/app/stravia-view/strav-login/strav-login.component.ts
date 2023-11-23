import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-strav-login',
  templateUrl: './strav-login.component.html',
  styleUrls: ['./strav-login.component.css']
})
export class StravLoginComponent {
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
        username: ['', Validators.required],
        password: ['', Validators.required],
      });
    }
    */

  home() {
    this.router.navigate(['/']);
  }

}
