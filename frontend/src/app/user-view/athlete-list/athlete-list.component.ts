import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sportman } from 'src/app/Interfaces/sportman';
import { NavBarComponent } from 'src/app/reusables/nav-bar/nav-bar.component';
import { ApiService } from 'src/app/Services/api-service';

@Component({
  selector: 'app-athlete-list',
  templateUrl: './athlete-list.component.html',
  styleUrls: ['./athlete-list.component.css']
})
export class AthleteListComponent {
  constructor(
    private router: Router,
    private SportmanApi: ApiService<Sportman>,
    private route: ActivatedRoute
  ){}
  selectedGroup: any;
  athlete: any;
  username: any;

  ngOnInit(){

    this.SportmanApi.getAll('Sportman').subscribe(
      (athlete: Sportman[]) => {
        this.athlete = athlete;
      },
      (error: any) => {
        console.error('Error fetching groups', error);
      }
    );
  }
addfriend(){
 

}
deletefriend(){

}
goHome(){
  this.router.navigate(['/app-user-home']);
}

}