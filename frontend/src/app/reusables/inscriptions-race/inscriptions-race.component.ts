import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { SponsorByRace } from 'src/app/Interfaces/sponsorByRace';
import { ApiService } from 'src/app/Services/api-service';
import { CategoryByRace } from 'src/app/Interfaces/categoryByRace';
@Component({
  selector: 'app-inscriptions-race',
  templateUrl: './inscriptions-race.component.html',
  styleUrls: ['./inscriptions-race.component.css']
})
export class InscriptionsRaceComponent {
  sponsorList: SponsorByRace[] = [];
  category: any;
  idRace: any;
  editMode = false;

  @Input() inscriptionR!: {    
    id: number;
    idActivity: number;
    activityType: string;
    cost: number;
    bankAccount: string;
    name: string;
    access: string;};

  constructor(
    private router: Router,
    private sponsorApi: ApiService<SponsorByRace>,
    private categoryApi: ApiService<CategoryByRace>
  ){}
  ngOnInit() {

    if (this.inscriptionR && this.inscriptionR.id) {
      this.sponsorApi.getById('SponsorByRace', this.inscriptionR.id)
        .subscribe((data) => {
          this.sponsorList = data;
          console.log(data);
        });
    }

    if (this.inscriptionR && this.inscriptionR.id) {
      this.categoryApi.getSingleById('CategoryByRace', this.inscriptionR.id)
        .subscribe((data) => {
          this.category = data;
          console.log(data);
        });
    }
    /*
    this.sponsorApi.getAll('SponsorByRace').subscribe((data) => {
      this.sponsorList = data;
    });
  */
  }
  inscription(nombreCarrera: string) {
    const carreraInfo = {
      nombre: nombreCarrera,
    };
    this.generatePDF(carreraInfo);
  }

  generatePDF(carreraInfo: any) {
    const docDefinition = {
      content: [
        {
          text: `Nombre de la carrera`,
          style: 'titulo',
          bold: true,
          fontSize: 30,
          color: '#1746a2',
        },
        `Nombre de la carrera: ${carreraInfo.nombre}`

      ],
    };

    pdfMake.createPdf(docDefinition).open();

  }


}
