import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-role-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './role-details.component.html',
  styleUrls: ['./role-details.component.css']
})
export class RoleDetailsComponent implements OnInit {
  role: any;
  securityLevels: any[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    const nav = this.router.getCurrentNavigation();
    this.role = nav?.extras?.state?.['role'];

    if (!this.role) {
      this.role = { name: 'Unknown', description: 'No description provided.' };
    }

    this.securityLevels = [
      { task: 'Access Hotel Data', level: 'High' },
      { task: 'Manage Reservations', level: 'Medium' },
      { task: 'Edit Room Availability', level: 'Low' },
      { task: 'Approve Expenses', level: 'High' }
    ];
  }
}
