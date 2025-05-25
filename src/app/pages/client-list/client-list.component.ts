import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface Reservation {
  name: string;
  email: string;
  phone: string;
  address: string;
}

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent {
  constructor(private router: Router) {}

  searchQuery = '';

  reservations: Reservation[] = [
    {
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+1 234 567 890',
      address: '123 Main St, New York'
    },
    {
      name: 'Sarah Smith',
      email: 'sarah.smith@example.com',
      phone: '+1 987 654 321',
      address: '456 Elm St, Los Angeles'
    },
    {
      name: 'Ali Ben Salah',
      email: 'ali.bensalah@example.com',
      phone: '+216 20 123 456',
      address: 'Rue de Carthage, Tunis'
    },
    {
      name: 'Emma Brown',
      email: 'emma.brown@example.com',
      phone: '+44 20 1234 5678',
      address: '78 Queen St, London'
    },
    {
      name: 'Mohamed Kacem',
      email: 'mohamed.kacem@example.com',
      phone: '+216 98 765 432',
      address: 'Avenue Habib Bourguiba, Sfax'
    },
    {
      name: 'Lina Chen',
      email: 'lina.chen@example.com',
      phone: '+86 10 1234 5678',
      address: 'No. 88, Beijing Rd, Shanghai'
    }
  ];

  get filteredReservations(): Reservation[] {
    return this.reservations.filter(res =>
      res.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  viewClientDetails(reservation: Reservation) {
    this.router.navigate(['/client-reservation'], { state: { reservation } });
  }

  // Method to navigate back
  goBack() {
    this.router.navigate(['../home']);  // Navigates back to the previous route (relative navigation)
  }
}
