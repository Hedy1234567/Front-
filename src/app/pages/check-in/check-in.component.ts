import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-check-in',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl:'./check-in.component.html',
  styleUrls: ['./check-in.component.css']
})
export class CheckInComponent implements OnInit {
  checkInForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

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
      idNumber: ['', Validators.required],
      idUpload: [null, Validators.required],
      roomType: ['', Validators.required],
      preferences: this.fb.group({
        nonSmoking: [false],
        highFloor: [false],
        nearElevator: [false]
      }),
      extras: this.fb.group({
        breakfast: [false],
        airportPickup: [false],
        spaAccess: [false],
        lateCheckout: [false]
      }),
      specialRequests: [''],
      agreeTerms: [false, Validators.requiredTrue]
    });
  }

  onSubmit(): void {
    if (this.checkInForm.valid) {
      console.log('Form Submitted:', this.checkInForm.value);
    } else {
      console.log('Form is invalid');
      this.checkInForm.markAllAsTouched();
    }
  }
  get formControls() {
    return this.checkInForm.controls; // Helper getter to access form controls in the template
  }
}
