import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Sponsor } from 'src/app/Interfaces/sponsor';
import { ApiService } from 'src/app/Services/api-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-manage-challenge',
  templateUrl: './manage-challenge.component.html',
  styleUrls: ['./manage-challenge.component.css']
})
export class ManageChallengeComponent {
  sponsorList: Sponsor[] = [];
  manageCForm: FormGroup;
  editMode = false;
  //promotionForm: FormGroup;
  constructor(
    private sponsorApi: ApiService<Sponsor>,
    private fb: FormBuilder
  ) {
    this.manageCForm = this.fb.group({
      sponsor: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.sponsorApi.getAll('Sponsor').subscribe((data) => {
      this.sponsorList = data;
    });
  }
  addGroup() {

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