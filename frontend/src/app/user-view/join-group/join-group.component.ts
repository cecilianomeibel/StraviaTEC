import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Groups } from 'src/app/Interfaces/group';
import { ApiService } from 'src/app/Services/api-service';

@Component({
  selector: 'app-join-group',
  templateUrl: './join-group.component.html',
  styleUrls: ['./join-group.component.css']
})
export class JoinGroupComponent {
  constructor(
    private router: Router,
    private api: ApiService<Groups>
  ){}

  selectedGroup: any;
  groups: any;

  ngOnInit(){
    this.api.getAll('Groups').subscribe(
      (groups: Groups[]) => {
        this.groups = groups;
      },
      (error: any) => {
        console.error('Error fetching groups', error);
      }
    );
  }

  goHome(){
    this.router.navigate(['/app-user-home']);
  }

}
