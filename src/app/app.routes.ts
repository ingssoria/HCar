
import {RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {ContentComponent} from "./content/content.component";
import {AboutusComponent} from "./content/aboutus/aboutus.component";
import {FaqComponent} from "./content/faq/faq.component";
import {ContactoComponent} from "./content/contacto/contacto.component";
import {ReservarComponent} from "./content/reservar/reservar.component";
import {HospedajeListComponent} from "./hospedaje-list/hospedaje-list.component";
import {ToursListComponent} from "./content/tours-list/tours-list.component";
import {ArticulosiiComponent} from "./content/tours-list/articulosii/articulosii.component";
import {artiiRoutes} from "./content/tours-list/articulosii/artii.routes";
import {ArticulosiiDetailsComponent} from "./content/tours-list/articulosii/articulosii-details/articulosii-details.component";
import {ArticulosiiListComponent} from "./content/tours-list/articulosii/articulosii-list/articulosii-list.component";
import {toursRoutes} from "./content/tours-list/tours.routes";

const  appRoutes: Routes = [
    { path: '', component: ContentComponent },
    { path: 'casas', component: HospedajeListComponent },
    /*{ path: 'tours', component: ToursListComponent },*/
    { path: '', component: ToursListComponent, children: toursRoutes },
    /*{ path: '', component: ArticulosiiComponent, children: artiiRoutes },*/
    { path: 'reservar', component: ReservarComponent },
    { path: 'aboutus', component: AboutusComponent },
    { path: 'faq', component: FaqComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: '**', redirectTo: '' }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);
