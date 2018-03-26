import { routes } from "./app.routes";

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DashboardDefaultComponent } from './content/dashboard-default/dashboard-default.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { AdminhospedajeComponent } from './adminhospedaje/adminhospedaje.component';
import { HospedajeListComponent } from './hospedaje-list/hospedaje-list.component';
import { HospedajeComponent } from './hospedaje-list/hospedaje.component';

import { CasaService } from "./services/casa.service";
import { ContactoComponent } from './content/contacto/contacto.component';
import { FaqComponent } from './content/faq/faq.component';
import { AboutusComponent } from './content/aboutus/aboutus.component';
import { ReservarComponent } from './content/reservar/reservar.component';
import { HospedajeDetailComponent } from './hospedaje-list/hospedaje-detail/hospedaje-detail.component';
import { SearchComponent } from './search/search.component';
import { BannerComponent } from './banner/banner.component';
import { ToursListComponent } from './content/tours-list/tours-list.component';
import { DashboardFirstitemComponent } from './content/dashboard-default/dashboard-firstitem/dashboard-firstitem.component';
import { DashboardSeconditemComponent } from './content/dashboard-default/dashboard-seconditem/dashboard-seconditem.component';
import { RowHospedajeListComponent } from './hospedaje-list/row-hospedaje-list/row-hospedaje-list.component';
import { ArticulosiiComponent } from './content/tours-list/articulosii/articulosii.component';
import { ArticulosatComponent } from './content/tours-list/articulosat/articulosat.component';
import { ArticuloscllComponent } from './content/tours-list/articuloscll/articuloscll.component';
import { ArticulosccComponent } from './content/tours-list/articuloscc/articuloscc.component';
import { ArticulosiuComponent } from './content/tours-list/articulosiu/articulosiu.component';
import { ArticulosiiDetailsComponent } from './content/tours-list/articulosii/articulosii-details/articulosii-details.component';
import { ArticulosiiListComponent } from './content/tours-list/articulosii/articulosii-list/articulosii-list.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardDefaultComponent,
    NavBarComponent,
    FooterComponent,
    ContentComponent,
    AdminhospedajeComponent,
    HospedajeListComponent,
    HospedajeComponent,
    ContactoComponent,
    FaqComponent,
    AboutusComponent,
    ReservarComponent,
    HospedajeDetailComponent,
    SearchComponent,
    BannerComponent,
    ToursListComponent,
    DashboardFirstitemComponent,
    DashboardSeconditemComponent,
    RowHospedajeListComponent,
    ArticulosiiComponent,
    ArticulosatComponent,
    ArticuloscllComponent,
    ArticulosccComponent,
    ArticulosiuComponent,
    ArticulosiiDetailsComponent,
    ArticulosiiListComponent
  ],
  imports: [
      routes,
      BrowserModule
  ],
  providers: [CasaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
