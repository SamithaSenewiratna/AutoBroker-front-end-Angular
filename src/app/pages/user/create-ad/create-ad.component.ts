import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { firstValueFrom } from 'rxjs';

interface VehicleAd {
  brand: string;
  model: string;
  title: string;
  description: string;
  price: number;
  year: string;
  location: string;
  fuelType: string;
  transmission: string;
  engineCapacity: string;
  condition?: string | null;
  mileage: string;
  contact: string;
  createdAt: string;
  images: string[];
  userId: number;
}

@Component({
  selector: 'app-create-ad',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule,RouterLink],
  templateUrl: './create-ad.component.html',
  styleUrls: ['./create-ad.component.css']
})
export class CreateAdComponent {
  newCarAd: VehicleAd = {
    condition: '',
    price: 0,
    engineCapacity: '',
    brand: '',
    model: '',
    title: '',
    description: '',
    year: '',
    location: '',
    fuelType: '',
    transmission: '',
    mileage: '',
    contact: '',
    createdAt: new Date().toISOString().slice(0, 10),
    images: [],
    userId: 1
  };

  constructor(private http: HttpClient) {}

  async submitAd() {
    console.log('Sending:', this.newCarAd);

    try {
      const response = await firstValueFrom(
        this.http.post(
          'http://localhost:8080/api/car-ads/add',
          this.newCarAd,
          { responseType: 'text' as 'json' } 
        )
      );
      console.log('Ad added!', response);
      alert('Ad added successfully!');
      closemodel();

    } catch (err) {
      console.error('Error adding ad:', err);
    }
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const fileArray = Array.from(input.files).map(file => file.webkitRelativePath); 
      this.newCarAd.images = fileArray;
      console.log('Selected files:', fileArray);
    }
  }
}
function closemodel() {
  const modal = document.getElementById('model');
  if (modal) {
    modal.style.display = 'none';
  }
  window.location.reload(); 
}

