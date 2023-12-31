import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { feed } from 'src/app/Interfaces/feed'; 
import { ApiService } from 'src/app/Services/api-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent {
  registeredSelect: any;
  username:any;

  constructor(
    private router: Router,
    private api: ApiService<feed>,
    private route: ActivatedRoute
  ){}

  userFeed:any;

  ngOnInit(){
    this.route.queryParams.subscribe((params) => {
      this.username = params['username'];
      if (this.username) {
        this.loadUserFeed();
        console.log(this.username)
      }
    });
  }

  private loadUserFeed() {
    this.api.getById('Feed', this.username).subscribe(
      (userFeed: feed[]) => {
        this.userFeed = userFeed;
      },
      (error: any) => {
        console.error('Error fetching user feed:', error);
      }
    );
  }

  registerActivity(){
    const username = this.username;
    this.router.navigate(['/app-register-activity'], { queryParams: { username } });
  }

  joinGroup(){
    const username = this.username;
    this.router.navigate(['/app-join-group'], { queryParams: { username } });
  }

  getRegisteredEvent(){
    const username = this.username;
    if(this.registeredSelect == "Carreras"){
      this.router.navigate(['/app-registered-races'], { queryParams: { username } });
    }else if(this.registeredSelect == "Retos"){
      this.router.navigate(['/app-registered-challenges'], { queryParams: { username } });
    }
  }


}
