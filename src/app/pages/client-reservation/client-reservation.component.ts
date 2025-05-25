import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-reservation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './client-reservation.component.html',
  styleUrls: ['./client-reservation.component.css']
})
export class ClientReservationComponent implements OnInit {
  reservation: any;

  constructor(private router: Router) {}

  ngOnInit() {
    // Get reservation data from navigation state
    this.reservation = history.state.reservation;

    // If no data passed, you can redirect or set a default
    if (!this.reservation) {
      this.reservation = {
        name: 'Unknown Client',
        hotel: 'N/A',
        roomType: 'N/A',
        reservationType: 'N/A',
        guests: 0,
        rooms: 0,
        checkIn: 'N/A',
        checkOut: 'N/A',
        status: 'Pending',
        pastReservations: []
      };
    }

    // Optional: Add static data for demo (remove if you fetch from DB later)
    if (!this.reservation.hotel) {
      this.reservation = {
        ...this.reservation,
        hotel: 'Hotel Nominis',
        roomType: 'Double',
        reservationType: 'Standard',
        guests: 2,
        rooms: 1,
        checkIn: '2025-05-20',
        checkOut: '2025-05-25',
        status: 'Confirmed',
        pastReservations: [
          {
            hotel: 'Previous Hotel A',
            roomType: 'Single',
            reservationType: 'Standard',
            checkIn: '2025-02-15',
            checkOut: '2025-02-18',
            status: 'Confirmed'
          },
          {
            hotel: 'Previous Hotel B',
            roomType: 'Suite',
            reservationType: 'VIP',
            checkIn: '2025-03-10',
            checkOut: '2025-03-15',
            status: 'Checked-out'
          }
        ]
      };
    }

    console.log('Loaded Reservation:', this.reservation);
  }

  goBack() {
    this.router.navigate(['/clients']);
  }
}
