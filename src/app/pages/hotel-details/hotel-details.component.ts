import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HotelService } from '../../services/hotel.service';

@Component({
  selector: 'app-hotel-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit {
  showAddressDetails = false;

  hotel = {
    id: undefined,
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

  constructor(
    private router: Router,
    private location: Location,
    private route: ActivatedRoute,
    private hotelService: HotelService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.hotelService.getHotelById(+id).subscribe((data: any) => {
        this.hotel = data;
        // Si le backend retourne aussi le personnel, décommentez :
        // this.personnelList = data.personnel || this.personnelList;
      });
    }
  }

  addPersonnel() {
    const newPersonnel = {
      fullName: '',
      phone: '',
      role: ''
    };
    // Appel à l'API pour ajouter le personnel si besoin
    if (this.hotel.id) {
      // Exemple d'appel à une méthode d'API (à adapter selon votre backend)
      // this.hotelService.addPersonnelToHotel(this.hotel.id, newPersonnel).subscribe((updatedPersonnelList) => {
      //   this.personnelList = updatedPersonnelList;
      // });
      // Pour l'instant, ajout local si l'API n'est pas encore prête :
      this.personnelList.push(newPersonnel);
    } else {
      this.personnelList.push(newPersonnel);
    }
  }

  removePersonnel(index: number) {
    this.personnelList.splice(index, 1);
  }

  saveHotel() {
    // On s'assure que l'objet envoyé correspond bien à l'interface Hotel attendue par le service
    const hotelToSend: any = {
      ...this.hotel,
      personnel: this.personnelList
    };
    // Pour update, il faut que hotelToSend ait les propriétés attendues par l'API (id, name, city, country, stars, etc.)
    if (hotelToSend.id) {
      this.hotelService.updateHotel(hotelToSend as any).subscribe(() => {
        this.router.navigate(['/hotel-list']);
      });
    } else {
      this.hotelService.createHotel(hotelToSend as any).subscribe(() => {
        this.router.navigate(['/hotel-list']);
      });
    }
  }

  cancel() {
    this.router.navigate(['/hotel-list']);
  }

  goBack() {
    this.location.back(); // Navigates to the previous page
  }
}
