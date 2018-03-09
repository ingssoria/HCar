
import {RouterModule, Routes} from "@angular/router";
import {ContentComponent} from "./content/content.component";
import {ModuleWithProviders} from "@angular/core";
import {AboutusComponent} from "./content/aboutus/aboutus.component";
import {FaqComponent} from "./content/faq/faq.component";
import {ContactoComponent} from "./content/contacto/contacto.component";
import {ReservarComponent} from "./content/reservar/reservar.component";
import {HospedajeListComponent} from "./hospedaje-list/hospedaje-list.component";
import {ToursListComponent} from "./content/tours-list/tours-list.component";

const  appRoutes: Routes = [
    { path: '', component: ContentComponent },
    { path: 'casas', component: HospedajeListComponent },
    { path: 'tours', component: ToursListComponent },
    { path: 'reservar', component: ReservarComponent },
    { path: 'aboutus', component: AboutusComponent },
    { path: 'faq', component: FaqComponent },
    { path: 'contacto', component: ContactoComponent },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);
