import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { ReservationService, Reservation } from '../../services/reservation.service';

@Component({
  selector: 'app-client-reservation',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './client-reservation.component.html',
  styleUrls: ['./client-reservation.component.css']
})
export class ClientReservationComponent implements OnInit {
  reservation: Reservation | undefined;

  constructor(private router: Router, private route: ActivatedRoute, private reservationService: ReservationService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.reservationService.getReservationById(+id).subscribe((data) => {
        this.reservation = data;
      });
    }
  }

  goBack() {
    this.router.navigate(['/clients']);
  }
}
