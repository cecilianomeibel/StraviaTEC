import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/Services/api-service';
import { Sportman } from 'src/app/Interfaces/sportmain';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent {
  registerForm: FormGroup;

  isSportman: boolean = false;
  name: string | undefined;
  lastname1: string | undefined;
  lastname2: string | undefined;
  birthDate: Date | undefined;
  nationality: string | undefined;
  password: string | undefined;
  picture: string | undefined;

  constructor(

    private router: Router,
    private fb: FormBuilder,
    private sportmanApi: ApiService<Sportman>,
    
    ) {
      this.registerForm = this.fb.group({
        username: ['', Validators.required],
        name: ['', Validators.required],
        lastname1: ['', Validators.required],
        lastname2: ['', Validators.required],
        bDate: [0, Validators.required],
        age: [0, Validators.required],
        nationality: ['', Validators.required],
        photo: ['', Validators.required],
        password: ['', Validators.required],
      });
    }

  submit() {
    //const nombrePelicula = this.branchMovieForm.get('nombrePelicula')?.value;
    const newSportman = new Sportman();
    newSportman.name = this.registerForm.get('name')?.value;
    newSportman.lastname1 = this.registerForm.get('lastname1')?.value;
    newSportman.lastname2 = this.registerForm.get('lastname2')?.value;
    newSportman.birthDate = this.registerForm.get('bDate')?.value;
    newSportman.nationality = this.registerForm.get('nationality')?.value;
    newSportman.password = this.registerForm.get('password')?.value;
    newSportman.picture = this.registerForm.get('photo')?.value;

/*
    this.sportmanApi.create('Passenger', newSportman).subscribe((data) => {
      this.registerForm.patchValue({ idsportman: data.username });
      const newUser: User = this.registerForm.value;
      this.userApi.create('User', newUser).subscribe((data) => {
        if (this.isSportman) {
          const newStudent = new Sportman();
          newStudent.username = '';
          newStudent.name = this.name;
          newStudent.lastname1 = this.lastname1;
          newStudent.lastname2 = this.lastname2;
          newStudent.birthDate = this.birthDate;
          newStudent.nationality = this.nationality;
          newStudent.password = this.password;
          newStudent.picture = this.picture;

          this.sportmanApi.create('Sportman', newSportman).subscribe((data) => {
            this.router.navigate(['/app-login']);
          });
        } else {
          this.router.navigate(['/app-login']);
        }
      });
    });

    */
  }


  
  back() {
    this.router.navigate(['/app-login']);
  }
}