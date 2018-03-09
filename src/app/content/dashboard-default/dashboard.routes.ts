
import {RouterModule, Routes} from "@angular/router";
import {ContentComponent} from "./content/content.component";
import {ModuleWithProviders} from "@angular/core";
import {AboutusComponent} from "./content/aboutus/aboutus.component";
import {FaqComponent} from "./content/faq/faq.component";
import {DashboardDefaultComponent} from "./content/dashboard-default/dashboard-default.component";

const  appRoutes: Routes = [
    { path: '', component: ContentComponent },
    { path: 'tours', component: DashboardDefaultComponent },
    { path: 'aboutus', component: AboutusComponent },
    { path: 'faq', component: FaqComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);
