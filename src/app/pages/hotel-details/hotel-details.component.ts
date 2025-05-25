import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';  // Import Location

@Component({
  selector: 'app-hotel-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent {
  showAddressDetails = false;

  hotel = {
    name: '',
    address: '',
    stars: 0,
    description: '',
    addressDetails: {
      streetName: '',
      streetNumber: '',
      postalCode: '',
      city: ''
    },
    roomTypes: {
      single: 0,
      double: 0,
      suite: 0
    }
  };

  personnelList = [
    {
      fullName: '',
      phone: '',
      role: ''
    }
  ];

  constructor(private router: Router, private location: Location) {}

  addPersonnel() {
    this.personnelList.push({
      fullName: '',
      phone: '',
      role: ''
    });
  }

  removePersonnel(index: number) {
    this.personnelList.splice(index, 1);
  }

  saveHotel() {
    const fullHotelData = {
      ...this.hotel,
      personnel: this.personnelList
    };

    console.log('Hôtel enregistré avec personnel :', fullHotelData);
    this.router.navigate(['/hotel-list']);
  }

  cancel() {
    this.router.navigate(['/hotel-list']);
  }

  goBack() {
    this.location.back(); // Navigates to the previous page
  }
}
