import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  userDetails: any;

  constructor(private location: Location) {
    const nav = history.state;
    this.userDetails = nav.user;
  }

  goBack() {
    this.location.back();
  }
}
