import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-role-liste',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './role-liste.component.html',
  styleUrls: ['./role-liste.component.css']
})
export class RoleListeComponent {
  roles = [
    { name: 'Manager', description: 'Oversees daily hotel operations.' },
    { name: 'President', description: 'Leads the strategic vision of the hotel.' },
    { name: 'Chef', description: 'Manages kitchen and culinary staff.' },
    { name: 'Receptionist', description: 'Handles guest check-ins and bookings.' }
  ];

  constructor(private router: Router) {}

  viewDetails(role: any) {
    this.router.navigate(['/role'], {
      state: { role }
    });
  }
}
