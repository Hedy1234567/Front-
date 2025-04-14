import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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
    stars: 1,
    description: '',
    addressDetails: {
      streetName: '',
      streetNumber: '',
      postalCode: '',
      city: ''
    }
  };

  personnelList = [
    {
      fullName: '',
      phone: '',
      role: ''
    }
  ];

  constructor(private router: Router) {}

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
}
