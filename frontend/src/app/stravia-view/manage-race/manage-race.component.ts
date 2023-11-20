import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Sponsor } from 'src/app/Interfaces/sponsor';
import { ApiService } from 'src/app/Services/api-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Groups } from 'src/app/Interfaces/group';
import { Activity } from 'src/app/Interfaces/activity';

@Component({
  selector: 'app-manage-race',
  templateUrl: './manage-race.component.html',
  styleUrls: ['./manage-race.component.css']
})
export class ManageRaceComponent {
  sponsorList: Sponsor[] = [];
  editMode = false;
  createForm:any;
  modifyForm:any;
  deleteForm:any;
  constructor(
    private sponsorApi: ApiService<Sponsor>,
    private fb: FormBuilder,
    private ActivityApi: ApiService<Activity>,
    private GroupApi: ApiService<Groups>){
      this.createForm = this.fb.group({
        activityType: ['', Validators.required],
        cost: ['', Validators.required],
        date: ['', Validators.required],
        bankAccount: ['', Validators.required],
        name:['', Validators.required],
        access:['', Validators.required]
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

  ngOnInit() {
    this.sponsorApi.getAll('Sponsor').subscribe((data) => {
      this.sponsorList = data;
    });
  }
  

  createRace(){
    const activity = {
      id: 0,
      activityType: this.createForm.value.activityType,
      dateAndTime: this.createForm.value.date,
      mileage: this.createForm.value.mileage,
      gpx:'mapa',
      eventType: 'Carrera',
      duration: '0'
    }

    this.ActivityApi.create('Activity', activity).subscribe(
      (respuesta) => {
        console.log("Se creo con exito el grupo", respuesta);
      },
      (error) => {
        console.error('Error al crear el grupo', error);
      }
    )
  }

  modifyGroup(){
    const group = {
      name: this.modifyForm.value.name,
      idSportman: this.modifyForm.value.admin
    }
    console.log(group)
    console.log(this.modifyForm.value.id)
    this.GroupApi.update('Groups', this.modifyForm.value.id, group).subscribe(
      (respuesta) => {
        console.log("Se edito con exito el grupo", respuesta);
      },
      (error) => {
        console.error('Error al editar el grupo', error);
      }
    )

  }

  deleteGroup(){

    this.GroupApi.delete('Groups', this.deleteForm.value.id).subscribe(
      (respuesta) => {
        console.log("Se elimino con exito el grupo", respuesta);
      },
      (error) => {
        console.error('Error al eliminar el grupo', error);
      }
    )

  }

}
