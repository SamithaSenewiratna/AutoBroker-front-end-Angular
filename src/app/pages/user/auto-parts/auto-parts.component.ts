import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../../common/navbar/navbar.component';
import { FooterComponent } from "../../../common/footer/footer.component";
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';



interface Advertisement {
  id: number;
  brand: string;
  model: string;
  title: string;
  description: string;
  price: number;
  location: string;
  year: string;
  condition?: string;
  contact: string;
  createdAt: string;
  images: string[];
  userId: number;
}

@Component({
  selector: 'app-auto-parts',
  imports: [NavbarComponent, FooterComponent, CommonModule, HttpClientModule],
  templateUrl: './auto-parts.component.html',
  styleUrls: ['./auto-parts.component.css']
})
export class AutoPartsComponent implements OnInit {

  activeSlideIndex: number = 0;

  advertisements: Advertisement[] = [];

  selectedAd: Advertisement | null = null;

  constructor(private http: HttpClient) {}  // Inject HttpClient

  ngOnInit(): void {
    this.fetchAdvertisements();  // Call the method to fetch data
  }

  // Fetch data from API
  fetchAdvertisements(): void {
    this.http.get<Advertisement[]>('http://localhost:8080/api/sparepart')
      .subscribe((data) => {
        this.advertisements = data;  // Assign the response to advertisements array
      }, error => {
        console.error('Error fetching advertisements:', error);  // Handle any errors
      });
  }

  openAdDetails(ad: Advertisement): void {
    this.selectedAd = ad;
    this.activeSlideIndex = 0; 
  }

  closeModal(): void {
    this.selectedAd = null;
  }

  prevSlide(): void {
    if (this.selectedAd?.images?.length) {
      this.activeSlideIndex =
        (this.activeSlideIndex - 1 + this.selectedAd.images.length) % this.selectedAd.images.length;
    }
  }

  nextSlide(): void {
    if (this.selectedAd?.images?.length) {
      this.activeSlideIndex =
        (this.activeSlideIndex + 1) % this.selectedAd.images.length;
    }
  }

  goToSlide(index: number): void {
    this.activeSlideIndex = index;
  }
}
