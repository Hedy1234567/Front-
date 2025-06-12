import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CheckInService, CheckIn } from '../../services/check-in.service';
import { HttpClient } from '@angular/common/http';
import { CardOcrService } from '../../services/card-ocr.service';

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
      this.rectoText = 'Extraction en cours...';
      this.cardOcrService.extractCardDetails(this.rectoFile, this.versoFile).subscribe({
        next: (result) => {
          this.rectoText = '';
          this.apiCardData = result;
          this.checkInForm.patchValue({
            bookingReference: result.num_carte || '',
            checkInDate: result.date_expiration || '',
            specialRequests: result.cvv || '',
            fullName: result.titulaire || ''
          });
        },
        error: () => {
          this.rectoText = "Erreur lors de l'extraction du texte.";
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
      this.rectoText = 'Extraction en cours...';
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
          this.rectoText = "Erreur lors de l'extraction du texte.";
          this.apiCardData = undefined;
        }
      });
    }
  }
}
