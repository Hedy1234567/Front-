import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CheckIn {
  id?: number;
  fullName: string;
  email: string;
  phoneNumber: string;
  bookingReference: string;
  checkInDate: string;
  checkOutDate: string;
  numberOfGuests: number;
  idType: string;
  roomType: string;
  preferences: {
    nonSmoking: boolean;
    highFloor: boolean;
    nearElevator: boolean;
  };
  extras: {
    breakfast: boolean;
    airportPickup: boolean;
    spaAccess: boolean;
    lateCheckout: boolean;
  };
  specialRequests: string;
  agreeTerms: boolean;
  // Ajoutez d'autres champs si besoin
}

@Injectable({
  providedIn: 'root'
})
export class CheckInService {
  private apiUrl = 'http://localhost:5000/reservation'; // À adapter selon votre backend

  constructor(private http: HttpClient) { }

  createCheckIn(data: CheckIn): Observable<CheckIn> {
    return this.http.post<CheckIn>(this.apiUrl, data);
  }

  getCheckIns(): Observable<CheckIn[]> {
    return this.http.get<CheckIn[]>(this.apiUrl);
  }

  getCheckInById(id: number): Observable<CheckIn> {
    return this.http.get<CheckIn>(`${this.apiUrl}/${id}`);
  }

  updateCheckIn(data: CheckIn): Observable<CheckIn> {
    return this.http.put<CheckIn>(`${this.apiUrl}/${data.id}`, data);
  }

  deleteCheckIn(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
