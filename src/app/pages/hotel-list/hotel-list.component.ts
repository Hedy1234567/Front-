import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { HotelService, Hotel } from '../../services/hotel.service';

@Component({
  selector: 'app-hotel-list',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
  hotels: Hotel[] = [];
  selectedCountry: string = 'All';

  constructor(private router: Router, private hotelService: HotelService) {}

  ngOnInit() {
    this.hotelService.getHotels().subscribe((data) => {
      this.hotels = data;
    });
  }

  get filteredHotels() {
    if (this.selectedCountry === 'All') {
      return this.hotels;
    }
    return this.hotels.filter(hotel => hotel.adresse.country === this.selectedCountry);
  }

  goToAddHotel(id?: number) {
    if (id) {
      this.router.navigate(['/hotel-details', id]);
    } else {
      this.router.navigate(['/hotel-details']);
    }
  }

  editHotel(hotel: any) {
    console.log('Modifier:', hotel);
    // this.router.navigate(['/edit-hotel', hotel.id]);
  }

  deleteHotel(hotel: any) {
    this.hotels = this.hotels.filter(h => h !== hotel);
  }

  filterByCountry(country: string) {
    this.selectedCountry = country;
  }
  goHome() {
    this.router.navigate(['/home']);
  }
  getStars(rating: number): number[] {
  return Array(rating).fill(0);
}
// isAdmin(): boolean {
//   return localStorage.getItem('role') === 'Admin';
// }
isAdmin(): boolean {

  if (typeof window !== 'undefined' && localStorage) {

    const role = localStorage.getItem('role');

    return role === 'Admin';

  }

  return false;

}
 
}
