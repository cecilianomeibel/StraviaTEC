import { Component, Input} from '@angular/core';
import { Sponsor } from 'src/app/Interfaces/sponsor';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/Services/api-service';
import { SponsorByChallenge } from 'src/app/Interfaces/sponsorByChallenge';
import { CategoryByChallenge } from 'src/app/Interfaces/groupByChallenge';


@Component({
  selector: 'app-inscriptions-challenge',
  templateUrl: './inscriptions-challenge.component.html',
  styleUrls: ['./inscriptions-challenge.component.css']
})
export class InscriptionsChallengeComponent {
  sponsorList: SponsorByChallenge[] = [];
  category: any;
  idChallenge: any;
  editMode = false;

  @Input() inscriptionC!: {    
    id: number;
    activityType: string;
    name: string;
    period: string;
    type: string;
    access: string;};

    constructor(
      private sponsorApi: ApiService<SponsorByChallenge>,
      private categoryApi: ApiService<CategoryByChallenge>
    ) {}
  
    ngOnInit() {

      if (this.inscriptionC && this.inscriptionC.id) {
        this.sponsorApi.getById('SponsorByChallenge', this.inscriptionC.id)
          .subscribe((data) => {
            this.sponsorList = data;
            console.log(data);
          });
      }

      if (this.inscriptionC && this.inscriptionC.id) {
        this.categoryApi.getSingleById('CategoryByChallenge', this.inscriptionC.id)
          .subscribe((data) => {
            this.category = data;
            console.log(data);
          });
      }
      /*
      this.sponsorApi.getAll('SponsorByChallenge').subscribe((data) => {
        this.sponsorList = data;
      });
    */
    }
  inscription() {

  }
}
