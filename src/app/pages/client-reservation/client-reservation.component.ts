import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';

@Component({
  selector: 'app-client-reservation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './client-reservation.component.html',
  styleUrls: ['./client-reservation.component.css']
})
export class ClientReservationComponent {
  reservation: any;

  constructor(private location: Location) {
    const nav = history.state;

    console.log(nav)
    this.reservation = nav.client;
  }

  goBack() {
    this.location.back();
  }
}
