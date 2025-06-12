// Définition des interfaces en haut du fichier
export interface Adresse {
  id: number;
  streetName: string;
  postalCode: number;
  city: string;
  country: string;
  streetNumber: number;
}

export interface Hotel {
  id: number;
  name: string;
  rating: number;
  single: number;
  double: number;
  suite: number;
  description: string;
  adresse_id: number;
  adresse: Adresse;
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private apiUrl = 'http://localhost:8000/hotels/hotels'; // Adapter l'URL si besoin

  constructor(private http: HttpClient) {}

  getHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.apiUrl);
  }

  getHotelById(id: number): Observable<Hotel> {
    return this.http.get<Hotel>(`${this.apiUrl}/${id}`);
  }

  createHotel(hotel: Hotel): Observable<Hotel> {
    return this.http.post<Hotel>(this.apiUrl, hotel);
  }

  updateHotel(hotel: Hotel): Observable<Hotel> {
    return this.http.put<Hotel>(`${this.apiUrl}/${hotel.id}`, hotel);
  }
}
