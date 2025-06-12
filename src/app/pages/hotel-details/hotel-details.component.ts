import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { Location } from '@angular/common';
import { HotelService } from '../../services/hotel.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-hotel-details',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit {
  showAddressDetails = false;

  getEmptyHotel() {
  return {
    id: undefined,
    name: '',
    rating: 0,
    description: '',
    adresse: {
      streetName: '',
      streetNumber: '',
      postalCode: '',
      city: '',
      country: ''
    },
    roomTypes: {
      single: 0,
      double: 0,
      suite: 0
    }
  };
};
  hotel = {
    id: undefined,
    name: '',
    rating: 0,
    description: '',
    adresse: {
      streetName: '',
      streetNumber: '',
      postalCode: '',
      city: '',
      country: ''
    },
    roomTypes: {
      single: 0,
      double: 0,
      suite: 0
    },
  };
  personnelList = [
    {
      name: '',
      phone: '',
      role: '',
      email:''
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
      name: '',
      phone: '',
      role: '',
      email : '',
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
  const hotelToSend: any = {
    ...this.hotel,
    personnel: this.personnelList
  };

  if (hotelToSend.id) {
    // UPDATE
    this.hotelService.updateHotel(hotelToSend).subscribe(() => {
      this.router.navigate(['/hotels']);
    });
  } else {
    // CREATE
    this.hotelService.createHotel(hotelToSend).subscribe(() => {
      Swal.fire({
        title: 'Hôtel créé avec succès !',
        text: 'Souhaitez-vous créer un autre hôtel ou revenir à la liste ?',
        icon: 'success',
        showCancelButton: true,
        confirmButtonText: 'Nouveau hôtel',
        cancelButtonText: 'Retour à la liste'
      }).then((result) => {
        if (result.isConfirmed) {
          // Réinitialiser les champs de l'hôtel pour créer un nouveau
          this.hotel = this.getEmptyHotel(); // ou utiliser this.hotelForm.reset() si tu utilises un formulaire
          this.personnelList = [];
        } else {
          // Retour à la liste
          this.router.navigate(['/hotels']);
        }
      });
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
