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
    this.router.navigate(['/app-register-activity']);
  }

  joinGroup(){
    this.router.navigate(['/app-join-group']);
  }

  getRegisteredEvent(){
    if(this.registeredSelect == "Carreras"){
      this.router.navigate(['/app-registered-races']);
    }else if(this.registeredSelect == "Retos"){
      this.router.navigate(['/app-registered-challenges']);
    }
  }


}
