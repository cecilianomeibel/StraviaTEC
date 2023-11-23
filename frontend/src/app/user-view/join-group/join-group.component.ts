import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Groups } from 'src/app/Interfaces/group';
import { SportmanMemberGroup } from 'src/app/Interfaces/sportmanMemberGroup';
import { ApiService } from 'src/app/Services/api-service';

@Component({
  selector: 'app-join-group',
  templateUrl: './join-group.component.html',
  styleUrls: ['./join-group.component.css']
})
export class JoinGroupComponent {
  constructor(
    private router: Router,
    private GroupsApi: ApiService<Groups>,
    private SportmanMemberGroupApi: ApiService<SportmanMemberGroup>,
    private route: ActivatedRoute
  ){}

  selectedGroup: any;
  groups: any;
  username: any;

  ngOnInit(){

    this.GroupsApi.getAll('Groups').subscribe(
      (groups: Groups[]) => {
        this.groups = groups;
      },
      (error: any) => {
        console.error('Error fetching groups', error);
      }
    );
  }

  join(){
    console.log(this.selectedGroup)
    //Obtener parametro de la pagina anterior (username)
    this.route.queryParams.subscribe((params) => {
      this.username = params['username'];
      if (this.username) {
        this.username = this.username;
      }
        const data = {
          nameGroup: this.selectedGroup,
          usernameSportman: this.username
        }
        console.log(data)
        this.SportmanMemberGroupApi.create('SportmanMemberGroup', data).subscribe(
          (respuesta) => {
            console.log(this.username + " se unio con exito al grupo " + this.selectedGroup, respuesta);
          },
          (error) => {
            console.error('Error al unirse al grupo', error);
          }
        )
      });
  }

  goHome(){
    this.router.navigate(['/app-user-home']);
  }

}
