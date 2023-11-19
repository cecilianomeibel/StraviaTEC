import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/Services/api-service';

@Component({
  selector: 'app-join-group',
  templateUrl: './join-group.component.html',
  styleUrls: ['./join-group.component.css']
})
export class JoinGroupComponent {
  constructor(
    private router: Router
    //private api: ApiService<Group>
  ){}

  selectedGroup: any;

  /**ngOnInit(){
    this.api.getById('Group', this.username).subscribe(
      (userFeed: feed[]) => {
        this.userFeed = userFeed;
      },
      (error: any) => {
        console.error('Error fetching user feed:', error);
      }
    );
  }**/

  goHome(){
    this.router.navigate(['/app-user-home']);
  }

}
