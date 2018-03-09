import { Component, OnInit, Input } from '@angular/core';
import { Casa } from "../model/casa.model";
import { Imagen } from "../model/imagen";

@Component({
  selector: 'app-hospedaje',
  templateUrl: './hospedaje.component.html',
  styleUrls: []
})
export class HospedajeComponent implements OnInit {

  @Input() casa: Casa/* = new Casa(
      "1",
      "Casa Quiñones",
      "Casa con Familia",
      "Casa",
      "Matanzas - Ciénaga de Zapata - Playa Larga",
      "Pedro",
      2,
      6,
      "Descripcion de la casa",
      [new Imagen("1","1", "1", "1","/images/home-images/casa-azul/4.jpg")]
      )*/;

  constructor() { }

  ngOnInit() {
  }

}
