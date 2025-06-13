import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-role-details',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './role-details.component.html',
  styleUrls: ['./role-details.component.css']
})
export class RoleDetailsComponent implements OnInit {
  role: any;
  securityLevels: any[] = [
    { task: 'Access Hotel Data', access: false },
    { task: 'Manage Reservations', access: true },
    { task: 'Edit Room Availability', access: true },
    { task: 'Approve Budget', access: false },
    { task: 'Check-in / Check-out Guests', access: false },
    { task: 'Manage Staff Schedules', access: false },
    { task: 'Generate Reports', access: true },
    { task: 'Handle Guest Complaints', access: false },
    { task: 'View Financial Statements', access: false },
    { task: 'Assign Housekeeping Tasks', access: false },
    { task: 'Manage Restaurant Menu', access: false },
    { task: 'Monitor Security Systems', access: false },
    { task: 'Handle Online Bookings', access: false },
  ];
  

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Fetch the role data passed through the navigation state
    const navigation = this.router.getCurrentNavigation();
    this.role = navigation?.extras?.state?.['role'];

    // Fallback if role data is not passed
    if (!this.role) {
      this.role = { name: 'Unknown Role', description: 'No description available.' };
    }
  }

  goBack() {
    // Navigate back to the role list
    this.router.navigate(['/role']);
  }
}
