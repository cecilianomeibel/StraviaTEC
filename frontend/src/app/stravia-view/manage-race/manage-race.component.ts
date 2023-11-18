import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Sponsor } from 'src/app/Interfaces/sponsor';
import { ApiService } from 'src/app/Services/api-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-manage-race',
  templateUrl: './manage-race.component.html',
  styleUrls: ['./manage-race.component.css']
})
export class ManageRaceComponent {
  sponsorList: Sponsor[] = [];
  manageRForm: FormGroup;
  editMode = false;
  constructor(
    private sponsorApi: ApiService<Sponsor>,
    private fb: FormBuilder
    //private router: Router,
    ) {
      this.manageRForm = this.fb.group({
        sponsor: ['', Validators.required],
      });
  }

  ngOnInit() {
    this.sponsorApi.getAll('Sponsor').subscribe((data) => {
      this.sponsorList = data;
    });
  }


  editRace() {

  }

  saveRace() {

  }

  deleteRace() {

  }

  createNew() {

  }

}
