import { Routes } from '@angular/router';

import { ArticulosiiDetailsComponent } from "./articulosii-details/articulosii-details.component";
import {ArticulosiiListComponent} from "./articulosii-list/articulosii-list.component";

export const artiiRoutes: Routes = [
    { path: 'art1', component: ArticulosiiListComponent },
    { path: 'art1/a/1', component: ArticulosiiDetailsComponent }
];