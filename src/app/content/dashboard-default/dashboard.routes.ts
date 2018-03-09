
import {RouterModule, Routes} from "@angular/router";
import { AboutusComponent } from "../aboutus/aboutus.component";
import { FaqComponent } from "../faq/faq.component";
import {ModuleWithProviders} from "@angular/core";


const  dashboardRoutes: Routes = [
    { path: 'aboutus', component: AboutusComponent },
    { path: 'faq', component: FaqComponent }
];

export const dashboardroutes: ModuleWithProviders = RouterModule.forRoot(dashboardRoutes);