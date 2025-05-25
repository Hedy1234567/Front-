import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

interface User {
  id: number;
  name: string;
  address: string;
  email: string;
  hotel: string;
  shift: string;
  checkIn: string;
  checkOut: string;
  role: 'admin' | 'client' | 'manager' | 'extra' | 'receptionist' | 'supervisor';
}

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserListComponent {
  users: User[] = [
    {
      id: 1,
      name: 'John Doe',
      address: '123 Main St, Springfield',
      email: 'john.doe@example.com',
      role: 'admin',
      hotel: 'royal',
      checkIn: '2025-04-10',
      checkOut: '2025-04-15',
      shift: 'Morning',
    },
    {
      id: 2,
      name: 'Jane Smith',
      address: '456 Oak Rd, Shelbyville',
      email: 'jane.smith@example.com',
      role: 'client',
      hotel: 'royal',
      checkIn: '2025-04-10',
      checkOut: '2025-04-15',
      shift: 'Afternoon',
    },
    {
      id: 3,
      name: 'Mike Johnson',
      address: '789 Pine St, Capital City',
      email: 'mike.johnson@example.com',
      role: 'manager',
      hotel: 'royal',
      checkIn: '2025-04-10',
      checkOut: '2025-04-15',
      shift: 'Night',
    },
    {
      id: 4,
      name: 'Lisa White',
      address: '101 Maple Ave, Ogdenville',
      email: 'lisa.white@example.com',
      role: 'extra',
      hotel: 'royal',
      checkIn: '2025-04-10',
      checkOut: '2025-04-15',
      shift: 'Night',
    },
    {
      id: 5,
      name: 'Tom Green',
      address: '202 Birch Blvd, Riverdale',
      email: 'tom.green@example.com',
      role: 'receptionist',
      hotel: 'royal',
      checkIn: '2025-04-12',
      checkOut: '2025-04-18',
      shift: 'Morning',
    },
    {
      id: 6,
      name: 'Sarah Brown',
      address: '303 Cedar St, Brookfield',
      email: 'sarah.brown@example.com',
      role: 'supervisor',
      hotel: 'royal',
      checkIn: '2025-04-14',
      checkOut: '2025-04-19',
      shift: 'Afternoon',
    },
    {
      id: 7,
      name: 'Chris Black',
      address: '404 Pine Rd, Rivertown',
      email: 'chris.black@example.com',
      role: 'receptionist',
      hotel: 'royal',
      checkIn: '2025-04-15',
      checkOut: '2025-04-20',
      shift: 'Night',
    },
  ];

  constructor(private router: Router) {}

  viewDetails(user: User) {
    this.router.navigate(['/user-details'], { state: { user } });
  }

  goBack() {
    this.router.navigate(['/home']); // Navigate back to home page or previous desired route
  }
}
