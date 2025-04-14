import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface Reservation {
  name: string;
  hotel: string;
  roomType: string;
  reservationType: string;
  checkIn: string;
  checkOut: string;
  rooms: number;
  guests: number;
  status: string;
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
      hotel: 'Hotel Sunshine',
      roomType: 'Deluxe',
      reservationType: 'Online',
      checkIn: '2025-04-10',
      checkOut: '2025-04-15',
      rooms: 2,
      guests: 4,
      status: 'Confirmed'
    },
    {
      name: 'Sarah Smith',
      hotel: 'Mountain Inn',
      roomType: 'Suite',
      reservationType: 'Phone',
      checkIn: '2025-04-12',
      checkOut: '2025-04-16',
      rooms: 1,
      guests: 2,
      status: 'Pending'
    },
    {
      name: 'Ali Ben Salah',
      hotel: 'Tunisia Palace',
      roomType: 'Double',
      reservationType: 'In-person',
      checkIn: '2025-04-14',
      checkOut: '2025-04-18',
      rooms: 3,
      guests: 6,
      status: 'Cancelled'
    },
    {
      name: 'Emma Brown',
      hotel: 'Ocean View Resort',
      roomType: 'Superior',
      reservationType: 'Online',
      checkIn: '2025-04-15',
      checkOut: '2025-04-17',
      rooms: 1,
      guests: 1,
      status: 'Confirmed'
    },
    {
      name: 'Mohamed Kacem',
      hotel: 'Dunes Hotel',
      roomType: 'Standard',
      reservationType: 'Online',
      checkIn: '2025-04-18',
      checkOut: '2025-04-22',
      rooms: 2,
      guests: 2,
      status: 'Pending'
    },
    {
      name: 'Lina Chen',
      hotel: 'City Central Hotel',
      roomType: 'Presidential Suite',
      reservationType: 'App',
      checkIn: '2025-04-20',
      checkOut: '2025-04-25',
      rooms: 1,
      guests: 2,
      status: 'Confirmed'
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
}
