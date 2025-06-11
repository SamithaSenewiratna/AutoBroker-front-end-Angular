import { Component } from '@angular/core';
import { NavbarComponent } from '../../../common/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../../../common/footer/footer.component";
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';


interface Advertisement {
  id: number;
  brand?: string;
  model?: string;
  title: string;
  description: string;
  price: number;
  location?: string;
  year?: string;
  fuelType?: string;
  transmission?: string;
  EngineCapacity?: string;
  condition?: string;
  mileage?: string;
  contact?: string;
  createdAt?: string;
  images?: String[]; 
  
}


@Component({
  selector: 'app-myadds',
  imports: [NavbarComponent, CommonModule, FooterComponent,FormsModule,HttpClientModule],
  templateUrl: './myadds.component.html',
  styleUrl: './myadds.component.css'
})
export class MyaddsComponent {
  advertisements: Advertisement[] = [];
  showEditModal = false;
  selectedProduct: any = {};
  imagePreviews: any;
  defaultImage: any;

  
  updateCarAd: Advertisement = {
    condition: '',
    price: 0,
    EngineCapacity: '',
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
      id: 1
  };

  private baseUrl = 'http://localhost:8080/api/car-ads';  

constructor(private http: HttpClient) {
  this.fetchAdvertisements();
}

fetchAdvertisements() {
  this.http.get<Advertisement[]>(this.baseUrl).subscribe({
    next: (data) => {
      this.advertisements = data;
    },
    error: (error) => {
      console.error('Failed to fetch advertisements:', error);
    }
  });
}

async saveChanges() {
  console.log('Sending update:', this.selectedProduct);

  try {
    const response = await firstValueFrom(
      this.http.put(
        `${this.baseUrl}/update/${this.selectedProduct.id}`,
        this.selectedProduct,
        { responseType: 'text' as 'json' }  
      )
    );
    console.log('Ad updated!', response);
    alert('Ad updated successfully!');

    const index = this.advertisements.findIndex(p => p.id === this.selectedProduct.id);
    if (index !== -1) {
      this.advertisements[index] = { ...this.selectedProduct }; 
    }

    this.closeModal();
  } catch (err) {
    console.error('Error updating ad:', err);
  }
}

update() {
  this.saveChanges();
}

delete(adId: number): void {
  this.http.delete(`${this.baseUrl}/delete/${adId}`).subscribe({
    next: () => this.onDeleteSuccess(adId),
    error: (error) => this.onDeleteError(error)
  });
}

private onDeleteSuccess(adId: number): void {

  this.showCustomAlert('✅ Ad deleted successfully!', 'success');
  const index = this.advertisements.findIndex(ad => ad.id === adId);
  if (index !== -1) {
    this.advertisements.splice(index, 1);
  }
}

private onDeleteError(error: any): void {
  console.error('Failed to delete advertisement:', error);
  this.showCustomAlert('❌ Failed to delete ad. Please try again.', 'error');
}

showCustomAlert(message: string, type: 'success' | 'error'): void {
  alert(message); 
}
  

onFileSelected(event: Event) {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files.length > 0) {
    const selectedFiles = Array.from(input.files);
    this.selectedProduct.images = selectedFiles; 
    this.generateImagePreviews(selectedFiles);
  }
}

  generateImagePreviews(files: File[]) {
    this.imagePreviews = []; 
    files.forEach((file: File) => {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagePreviews.push(e.target.result); 
      };
      reader.readAsDataURL(file);
    });
  }


triggerFileInput(index: number) {
  const input = document.getElementById('mainImageInput' + index) as HTMLInputElement;
  if (input) input.click();
  
}
  openEditModal(product: any) {
    this.selectedProduct = { ...product };
    this.showEditModal = true;
  }

  closeModal() {
    this.showEditModal = false;
    this.selectedProduct = {};
  }

 
}