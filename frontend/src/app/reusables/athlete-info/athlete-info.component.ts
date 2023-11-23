import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/Services/api-service';
import { Sportman } from 'src/app/Interfaces/sportman';
import { Router } from '@angular/router';

@Component({
  selector: 'app-athlete-info',
  templateUrl: './athlete-info.component.html',
  styleUrls: ['./athlete-info.component.css']
})
export class AthleteInfoComponent {
  @Input() sportman: Sportman | undefined;
  //sportman: Sportman = {};
  constructor(
    private apiService: ApiService<Sportman>,
    private router: Router,
  ) { }

  ngOnInit() {
    console.log(' usuarios encontrados athlete info:', this.sportman);
  }

  addFriend() {

  }
  deleteFriend() {

  }
}


  /*
  ngOnInit() {
    // Llama al método del servicio para obtener los datos del deportista
    console.log('no entra ');
    this.apiService.getAll('sportsman') // Ajusta 'sportsman' según tu endpoint
      .subscribe((data: Sportman[]) => {
        // Supongamos que obtienes un array de deportistas y quieres el primero
        console.log('no entra al if');
        if (data && data.length > 0) {
          console.log('entra al if');
          this.sportman = data[0]; // Obtén el primer deportista
        }


      });
  }
*/