import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../../common/navbar/navbar.component';
import { FooterComponent } from '../../../common/footer/footer.component';
import { CommonModule } from '@angular/common';
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
  selector: 'app-all-ads',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CommonModule, RouterLink, HttpClientModule],
  templateUrl: './all-ads.component.html',
  styleUrls: ['./all-ads.component.css']
})
export class AllAdsComponent implements OnInit {

  constructor(private http: HttpClient) {}

  advertisements: Advertisement[] = [];
  selectedAd: Advertisement | null = null;
  activeSlideIndex: number = 0;

  ngOnInit(): void {
    this.fetchAds();
  }

  fetchAds(): void {
    this.http.get<Advertisement[]>('http://localhost:8080/api/car-ads') 
      .subscribe({
        next: (data) => this.advertisements = data,
        error: (err) => console.error('Error fetching ads', err)
      });
  }

  toggleModel() {
    const modal = document.getElementById('topUpModal');
    if (modal?.classList.contains('hidden')) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    } else {
      modal?.classList.add('hidden');
      modal?.classList.remove('flex');
    }
  }

  toggleHowToUseModal() {
    const modal = document.getElementById('howToUseModal');
    if (modal?.classList.contains('hidden')) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    } else {
      modal?.classList.add('hidden');
      modal?.classList.remove('flex');
    }
  }

  toggleLogoutModal() {
    const modal = document.getElementById('logoutModal');
    if (modal?.classList.contains('hidden')) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    } else {
      modal?.classList.add('hidden');
      modal?.classList.remove('flex');
    }
  }

  confirmLogout(): void {
    window.location.href = '/loginUser';
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
        (this.activeSlideIndex - 1 + this.selectedAd.images.length) %
        this.selectedAd.images.length;
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
