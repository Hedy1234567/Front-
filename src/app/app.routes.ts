import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { HotelListComponent } from './pages/hotel-list/hotel-list.component';
import { HotelDetailsComponent } from './pages/hotel-details/hotel-details.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component'; // 👈 import ajouté
import { IntegrationsComponent } from './pages/integrations/integrations.component';
import { ClientListComponent } from './pages/client-list/client-list.component';
import { ClientReservationComponent } from './pages/client-reservation/client-reservation.component';
import { RoleListeComponent } from './pages/role-liste/role-liste.component';
import { RoleDetailsComponent } from './pages/role-details/role-details.component';
 
export const appRoutes: Routes = [
  { path: '', component: WelcomePageComponent }, // 👈 page d’accueil
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'hotels', component: HotelListComponent },
  { path: 'clients', component: ClientListComponent },
  { path: 'Marketplace',component: IntegrationsComponent},
  { path: 'Déconnexion', component: LoginComponent },
  { path: 'hotel-details', component: HotelDetailsComponent },
  { path: 'integrations', component: IntegrationsComponent },
  { path: 'client-list', component: ClientListComponent },
  { path: 'client-reservation', component: ClientReservationComponent },
  { path: 'role', component: RoleListeComponent },
  { path: 'role-details', component: RoleDetailsComponent },
];
