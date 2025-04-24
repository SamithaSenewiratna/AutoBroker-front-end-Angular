import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';



interface Advertisement {
  postedDate: any;
    id: number;
    brand?: string;
    model?: string;
    title: string;
    description: string;
    price: number;
    location?: string;
    year?: string;
    fualType?: string;
    transmission?: string;
    EngineCapacity?: string;
    condition?: string;
    mileage?: string;
    contact?: string;
    createdAt?: string;
    images: string[];
  }
  



@Component({
  selector: 'app-create-ad',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink, HttpClientModule],
  templateUrl: './create-ad.component.html',
  styleUrl: './create-ad.component.css'
})
export class CreateAdComponent implements OnInit {
  
  ngOnInit(): void {
    this.fetchAds();
  }

  constructor(private http: HttpClient) {}


  advertisements: Advertisement[] = [];
  selectedAd: Advertisement | null = null;  
  activeSlideIndex: number = 0;
  
  fetchAds(): void {
    this.http.get<Advertisement[]>('http://localhost:8080/api/car-ads') 
      .subscribe({
        next: (data) => this.advertisements = data,
        error: (err) => console.error('Error fetching ads', err)
      });
  }





  defaultMainImage: string = 'https://www.shutterstock.com/image-vector/upload-add-picture-jpg-file-600nw-1975494812.jpg';
  mainImagePreview: string = '';

  defaultImage: string = this.defaultMainImage;
  imagePreviews: string[] = ['', '', '', ''];

  ad = {
    brand: '',
    model: '',
    title: '',
    description: '',
    price: 0.0,
    location: '',
    year: '',
    fuelType: '',
    transmission: '',
    engineCapacity: '',
    condition: '',
    mileage: '',
    contact: '',
    createdAt: new Date().toISOString(),
    images: [] as string[],
    userId: 1
  };

  triggerMainImageInput() {
    const input = document.getElementById('mainImageInput') as HTMLInputElement;
    if (input) input.click();
  }

  onMainImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.mainImagePreview = reader.result as string;
        this.ad.images[0] = this.mainImagePreview;
      };
      reader.readAsDataURL(file);
    }
  }

  triggerFileInput(index: number) {
    const fileInput = document.getElementById('fileInput' + index) as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  }

  onSingleFileChange(event: Event, index: number) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreviews[index] = reader.result as string;
        this.ad.images[index + 1] = this.imagePreviews[index]; // +1 to leave [0] for main image
      };
      reader.readAsDataURL(file);
    }
  }

  onMultipleFilesChange(event: Event) {
    const files = (event.target as HTMLInputElement).files;
    if (files) {
      this.imagePreviews = [];
      for (let i = 0; i < Math.min(files.length, 5); i++) {
        const reader = new FileReader();
        reader.onload = () => {
          this.imagePreviews[i] = reader.result as string;
          this.ad.images[i + 1] = this.imagePreviews[i]; // +1 to leave [0] for main image
        };
        reader.readAsDataURL(files[i]);
      }
    }
  }

  submitAd() {
    const url = 'http://localhost:8080/api/car-ads/ads';
    this.http.post(url, this.ad).subscribe({
      next: () => alert('Ad submitted successfully!'),
      error: () => alert('Failed to submit ad.')
    });
  }
}
