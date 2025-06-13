import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CheckInService, CheckIn } from '../../services/check-in.service';
import { HttpClient } from '@angular/common/http';
import { CardOcrService } from '../../services/card-ocr.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-check-in',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.css']
})
export class CheckInComponent implements OnInit {
  checkInForm!: FormGroup;
  rectoFile: File | null = null;
  versoFile: File | null = null;
  rectoText: string = '';
  versoText: string = '';
  apiCardData: any; // Ajout d'une propriété pour stocker les données de la carte

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private checkInService: CheckInService,
    private http: HttpClient,
    private cardOcrService: CardOcrService
  ) {}

  ngOnInit(): void {
    this.checkInForm = this.fb.group({
      full_name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone_number: ['', [Validators.required, Validators.pattern('^[0-9]{8,15}$')]],
      booking_reference_number: ['', Validators.required],
      check_in_date: ['', Validators.required],
      check_out_date: ['', Validators.required],
      number_of_guests: ['', [Validators.required, Validators.min(1)]],
      id_type: ['', Validators.required],
      room_type: ['', Validators.required],    
    });
  }

 onSubmit(): void {
  if (this.checkInForm.valid) {
    this.checkInService.createCheckIn(this.checkInForm.value).subscribe({
      next: (res) => {
        Swal.fire({
          title: 'Your check-in was successful!',
          text: 'Would you like to create another check-in or return to the list?',
          icon: 'success',
          showCancelButton: true,
          confirmButtonText: 'New check-in',
          cancelButtonText: 'Back to list'
        });
      },
      error: (err) => {
        alert('Error while saving the check-in.');
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

  async extractCardData(file: File) {
    if (!file) return '';
    const Tesseract = (await import('tesseract.js')).default;
    const { data: { text } } = await Tesseract.recognize(file, 'eng');
    return text;
  }

  async onRectoSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0] || null;
    this.rectoFile = file;
    this.apiCardData = undefined;
    if (this.rectoFile && this.versoFile) {
      this.rectoText = 'Extraction in progress...';
      this.cardOcrService.extractCardDetails(this.rectoFile, this.versoFile).subscribe({
        next: (result:any) => {
          this.rectoText = '';
          this.apiCardData = result.data;
          this.checkInForm.patchValue({
            bookingReference: result.data.num_carte || '',
            checkInDate: result.data.date_expiration || '',
            specialRequests: result.data.cvv || '',
            fullName: result.data.titulaire || ''
          });
        },
        error: () => {
          this.rectoText = 'Error during extraction.';
          this.apiCardData = undefined;
        }
      });
    }
  }

  async onVersoSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0] || null;
    this.versoFile = file;
    this.apiCardData = undefined;
    if (this.rectoFile && this.versoFile) {
      this.rectoText = 'Extraction in progress...';
      this.cardOcrService.extractCardDetails(this.rectoFile, this.versoFile).subscribe({
        next: (result: any) => {
          this.rectoText = '';
          this.apiCardData = result.data;
          this.checkInForm.patchValue({
            bookingReference: result.num_carte || '',
            checkInDate: result.date_expiration || '',
            specialRequests: result.cvv || '',
            fullName: result.titulaire || ''
          });
        },
        error: () => {
          this.rectoText = 'Error during extraction.';
          this.apiCardData = undefined;
        }
      });
    }
  }

  // isAdmin(): boolean {
  //   return localStorage.getItem('role') === 'Admin';
  // }
}
