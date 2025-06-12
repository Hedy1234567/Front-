import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Reservation {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  hotel?: string;
  roomType?: string;
  reservationType?: string;
  guests?: number;
  rooms?: number;
  checkIn?: string;
  checkOut?: string;
  status?: string;
  pastReservations?: Array<{
    hotel?: string;
    roomType?: string;
    reservationType?: string;
    checkIn?: string;
    checkOut?: string;
    status?: string;
  }>;
}

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private apiUrl = 'http://localhost:8000/reservations'; // À adapter selon votre backend

  constructor(private http: HttpClient) {}

  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.apiUrl);
  }

  getReservationById(id: number): Observable<Reservation> {
    return this.http.get<Reservation>(`${this.apiUrl}/${id}`);
  }

  createReservation(reservation: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(this.apiUrl, reservation);
  }

  updateReservation(reservation: Reservation): Observable<Reservation> {
    return this.http.put<Reservation>(`${this.apiUrl}/${reservation.id}`, reservation);
  }

  deleteReservation(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
