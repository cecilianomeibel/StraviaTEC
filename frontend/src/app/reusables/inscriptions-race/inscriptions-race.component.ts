import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';


@Component({
  selector: 'app-inscriptions-race',
  templateUrl: './inscriptions-race.component.html',
  styleUrls: ['./inscriptions-race.component.css']
})
export class InscriptionsRaceComponent {

  @Input() inscriptionR!: {    
    id: number;
    idActivity: number;
    activityType: string;
    cost: number;
    bankAccount: string;
    name: string;
    access: string;};

  constructor(
    private router: Router
  ){}

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
