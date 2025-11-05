import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UslugeComponent } from './pages/usluge/usluge.component';

export const routes: Routes = [
    { path: '', redirectTo: '/pocetna', pathMatch: 'full'},
    { path: 'pocetna', component: HomeComponent},
    { path: 'usluge', component: UslugeComponent}
];
