import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-challenge',
  templateUrl: './manage-challenge.component.html',
  styleUrls: ['./manage-challenge.component.css']
})
export class ManageChallengeComponent {
  executionList: any;
  promotionList: any;
  editMode = false;
  //promotionForm: FormGroup;
  constructor(private router: Router) {
  }

  ngOnInit() {

  }

  editRace() {

  }

  saveRace() {

  }

  deleteRace() {

  }

  createNew() {

  }

  home() {
    this.router.navigate(['/']);
  }

}