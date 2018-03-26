import { Routes } from '@angular/router';


import { ArticulosiiDetailsComponent } from "./articulosii/articulosii-details/articulosii-details.component";
import {ArticulosiiComponent} from "./articulosii/articulosii.component";
import {ArticulosatComponent} from "./articulosat/articulosat.component";
import {ArticulosccComponent} from "./articuloscc/articuloscc.component";
import {ArticuloscllComponent} from "./articuloscll/articuloscll.component";
import {ArticulosiuComponent} from "./articulosiu/articulosiu.component";

export const toursRoutes: Routes = [
    { path: 'art/a', component: ArticulosiiComponent },
    { path: 'art/b', component: ArticulosatComponent },
    { path: 'art/c', component: ArticuloscllComponent },
    { path: 'art/d', component: ArticulosccComponent },
    { path: 'art/e', component: ArticulosiuComponent },
    { path: 'art/a/1', component: ArticulosiiDetailsComponent }
];