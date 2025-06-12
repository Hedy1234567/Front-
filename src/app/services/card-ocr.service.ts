import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CardExtractResult {
  num_carte: string;
  date_expiration: string;
  cvv: string;
  titulaire: string;
}

@Injectable({ providedIn: 'root' })
export class CardOcrService {
  private apiUrl = '/api/extract-card-details';

  constructor(private http: HttpClient) {}

  extractCardDetails(frontFile: File, backFile?: File): Observable<CardExtractResult> {
    const formData = new FormData();
    formData.append('front_image', frontFile);
    if (backFile) {
      formData.append('back_image', backFile);
    }
    return this.http.post<CardExtractResult>(this.apiUrl, formData);
  }
}
