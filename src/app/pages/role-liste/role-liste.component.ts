import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-role-liste',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './role-liste.component.html',
  styleUrls: ['./role-liste.component.css']
})
export class RoleListeComponent {
  roles = [
    { name: 'Admin', description: 'Has full access to all system resources and settings.' },
    { name: 'Manager', description: 'Oversees hotel operations and manages staff and guests.' },
    { name: 'Receptionist', description: 'Handles guest check-ins, check-outs, and front desk services.' },
    { name: 'Housekeeping', description: 'Responsible for cleaning and maintaining guest rooms and common areas.' },
    { name: 'Concierge', description: 'Provides guest services like booking tours, reservations, and special requests.' },
    { name: 'Chef', description: 'Prepares meals and oversees kitchen staff.' },
    { name: 'Waiter/Waitress', description: 'Serves food and drinks to hotel guests.' },
    { name: 'Security', description: 'Ensures safety and security of guests, staff, and the hotel premises.' },
    { name: 'Maintenance', description: 'Handles repairs and maintenance throughout the hotel.' },
    { name: 'Client', description: 'Can view hotel details, book rooms, and manage personal reservations.' },
    { name: 'User', description: 'General system user with limited access based on assigned permissions.' },
  ];
  

  constructor(private router: Router) {}

  viewDetails(role: any) {
    // Navigate to Role Details component, passing role data
    this.router.navigate(['/role-details'], { state: { role } });
  }
  goBack() {
    this.router.navigate(['/home']); // or navigate to another page you want as "back"
  }
  
}
