import { Component, OnInit } from '@angular/core';
import { Casa } from "../model/casa.model";
import { CasaService } from "../services/casa.service";

@Component({
  selector: 'app-hospedaje-list',
  templateUrl: './hospedaje-list.component.html',
  styleUrls: []
})
export class HospedajeListComponent implements OnInit {

  constructor( private casaServ: CasaService ) { }

  casas: Casa[][] = [[],[]];

  ngOnInit() {
    let aux_casas = this.casaServ.getCasas();
      //console.log(aux_casas);

    for (let i=0; i < aux_casas.length; i++){
      if(i%2 == 0){
        this.casas[0].push(aux_casas[i]);
          //console.log(i%2);
      }
      else{
        this.casas[1].push(aux_casas[i]);console.log(i%2);
      }
    }//console.log(this.casas);
  }

}
