import { Component} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'friend-card',
  templateUrl: './friend-card.component.html',
  styleUrls: ['./friend-card.component.css'],
})
export class FriendCardComponent {
  constructor(
    private router: Router
  ){}

  viewComments(){
    this.router.navigate(['/app-comment']);
  }
}
