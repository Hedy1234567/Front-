import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent {
  hotels = [
    { name: 'Hôtel de Paris', city: 'Paris', country: 'France', stars: '⭐⭐⭐⭐' },
    { name: 'Hôtel du Soleil', city: 'Tunis', country: 'Tunisie', stars: '⭐⭐⭐' },
    { name: 'Kenzi Menara Palace', city: 'Marrakech', country: 'Maroc', stars: '⭐⭐⭐⭐⭐' },
    { name: 'Royal Tulip', city: 'Alger', country: 'Algérie', stars: '⭐⭐⭐⭐' }
  ];

  selectedCountry: string = 'All';

  get filteredHotels() {
    if (this.selectedCountry === 'All') {
      return this.hotels;
    }
    return this.hotels.filter(hotel => hotel.country === this.selectedCountry);
  }

  constructor(private router: Router) {}

  goToAddHotel() {
    this.router.navigate(['/hotel-details']);
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
}
