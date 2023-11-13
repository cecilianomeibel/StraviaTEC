import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-race',
  templateUrl: './manage-race.component.html',
  styleUrls: ['./manage-race.component.css']
})
export class ManageRaceComponent {
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
