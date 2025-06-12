import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CheckInService, CheckIn } from '../../services/check-in.service';

@Component({
  selector: 'app-check-in',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.css']
})
export class CheckInComponent implements OnInit {
  checkInForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private checkInService: CheckInService) {}

  ngOnInit(): void {
    this.checkInForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{8,15}$')]],
      bookingReference: ['', Validators.required],
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      numberOfGuests: ['', [Validators.required, Validators.min(1)]],
      idType: ['', Validators.required],
      roomType: ['', Validators.required],
      nonSmoking: [false],
      highFloor: [false],
      nearElevator: [false],
      breakfast: [false],
      airportPickup: [false],
      spaAccess: [false],
      lateCheckout: [false],
      specialRequests: [''],
      agreeTerms: [false, Validators.requiredTrue]
    });
  }

  onSubmit(): void {
    if (this.checkInForm.valid) {
      this.checkInService.createCheckIn(this.checkInForm.value).subscribe({
        next: (res) => {
          alert('Check-in enregistré avec succès !');
          this.router.navigate(['/home']);
        },
        error: (err) => {
          alert('Erreur lors de l\'enregistrement du check-in.');
          console.error(err);
        }
      });
    } else {
      this.checkInForm.markAllAsTouched();
    }
  }

  goBack(): void {
    this.router.navigate(['../home']);
  }

  get formControls() {
    return this.checkInForm.controls;
  }
}
