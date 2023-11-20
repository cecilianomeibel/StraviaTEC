import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Groups } from 'src/app/Interfaces/group';
import { ApiService } from 'src/app/Services/api-service';

@Component({
  selector: 'app-manage-group',
  templateUrl: './manage-group.component.html',
  styleUrls: ['./manage-group.component.css']
})
export class ManageGroupComponent {
  createForm:any;
  modifyForm:any;
  deleteForm:any;

  constructor(
    private fb: FormBuilder,
    private GroupApi: ApiService<Groups>){
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
    const group = {
      name: this.createForm.value.name,
      idSportman: this.createForm.value.admin
    }
    console.log(group)

    this.GroupApi.create('Groups', group).subscribe(
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
