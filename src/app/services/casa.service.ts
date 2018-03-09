import { Injectable } from '@angular/core';
import { Casa } from "../model/casa.model";
import { Imagen } from "../model/imagen";

@Injectable()
export class CasaService {

  constructor() { }

  getCasas(){
    let casas: Casa[] = [
        new Casa(
            '1',
            'Casa Quiñones',
            'Casa con Familia',
            'Casa',
            'Matanzas - Ciénaga de Zapata - Playa Larga',
            'Pedro',
            2,
            6,
            'Descripcion de la casa',
            [new Imagen('1','1', '1', '1','/images/home-images/casa-azul/4.jpg')]
        ),
        new Casa(
            '1',
            'Casa Quiñones',
            'Casa con Familia',
            'Casa',
            'Matanzas - Ciénaga de Zapata - Playa Larga',
            'Pedro',
            2,
            6,
            'Descripcion de la casa',
            [new Imagen('1','1', '1', '1','/images/home-images/casa-azul/5.jpg')]
        ),
        new Casa(
            '1',
            'Casa Quiñones',
            'Casa con Familia',
            'Casa',
            'Matanzas - Ciénaga de Zapata - Playa Larga',
            'Pedro',
            2,
            6,
            'Descripcion de la casa',
            [new Imagen('1','1', '1', '1','/images/home-images/casa-azul/6.jpg')]
        ),
        new Casa(
            '1',
            'Casa Quiñones',
            'Casa con Familia',
            'Casa',
            'Matanzas - Ciénaga de Zapata - Playa Larga',
            'Pedro',
            2,
            6,
            'Descripcion de la casa',
            [new Imagen('1','1', '1', '1','/images/home-images/casa-azul/7.jpg')]
        ),
        new Casa(
            '1',
            'Casa Quiñones',
            'Casa con Familia',
            'Casa',
            'Matanzas - Ciénaga de Zapata - Playa Larga',
            'Pedro',
            2,
            6,
            'Descripcion de la casa',
            [new Imagen('1','1', '1', '1','/images/home-images/casa-azul/9.jpg')]
        ),
        new Casa(
            '1',
            'Casa Quiñones',
            'Casa con Familia',
            'Casa',
            'Matanzas - Ciénaga de Zapata - Playa Larga',
            'Pedro',
            2,
            6,
            'Descripcion de la casa',
            [new Imagen('1','1', '1', '1','/images/home-images/casa-azul/3.jpg')]
        ),
        new Casa(
            '1',
            'Casa Quiñones',
            'Casa con Familia',
            'Casa',
            'Matanzas - Ciénaga de Zapata - Playa Larga',
            'Pedro',
            2,
            6,
            'Descripcion de la casa',
            [new Imagen('1','1', '1', '1','/images/home-images/casa-azul/10.jpg')]
        ),
        new Casa(
            '1',
            'Casa Quiñones',
            'Casa con Familia',
            'Casa',
            'Matanzas - Ciénaga de Zapata - Playa Larga',
            'Pedro',
            2,
            6,
            'Descripcion de la casa',
            [new Imagen('1','1', '1', '1','/images/home-images/casa-azul/11.jpg')]
        ),
        new Casa(
            '1',
            'Casa Quiñones',
            'Casa con Familia',
            'Casa',
            'Matanzas - Ciénaga de Zapata - Playa Larga',
            'Pedro',
            2,
            6,
            'Descripcion de la casa',
            [new Imagen('1','1', '1', '1','/images/home-images/casa-azul/1.jpg')]
        ),
        new Casa(
            '1',
            'Casa Quiñones',
            'Casa con Familia',
            'Casa',
            'Matanzas - Ciénaga de Zapata - Playa Larga',
            'Pedro',
            2,
            6,
            'Descripcion de la casa',
            [new Imagen('1','1', '1', '1','/images/home-images/casa-azul/12.jpg')]
        ),
        new Casa(
            '1',
            'Casa Quiñones',
            'Casa con Familia',
            'Casa',
            'Matanzas - Ciénaga de Zapata - Playa Larga',
            'Pedro',
            2,
            6,
            'Descripcion de la casa',
            [new Imagen('1','1', '1', '1','/images/home-images/casa-azul/2.jpg')]
        )
      ];

    return casas;
  }

}
