import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // 👈 nécessaire

@Component({
  selector: 'app-welcome-page',
  standalone: true, // 👈 si c’est un composant standalone
  imports: [RouterModule], // 👈 IMPORT ICI pour que routerLink marche
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent {}
