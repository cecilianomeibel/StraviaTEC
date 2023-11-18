import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-manage-group',
  templateUrl: './manage-group.component.html',
  styleUrls: ['./manage-group.component.css']
})
export class ManageGroupComponent {
  createForm:any;
  modifyForm:any;
  deleteForm:any;

  constructor(private fb: FormBuilder){
    this.createForm = this.fb.group({
      name:['', Validators.required],
      admin:['', Validators.required]
    });
    this.modifyForm = this.fb.group({
      id:['', Validators.required],
      name:['', Validators.required],
      admin:['', Validators.required]
    });
    this.deleteForm = this.fb.group({
      id:['', Validators.required]
    });
  }
  

  createGroup(){

  }

  modifyGroup(){

  }

  deleteGroup(){

  }
}
