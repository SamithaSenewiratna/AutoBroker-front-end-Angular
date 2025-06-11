import { Component } from '@angular/core';
import { AdminSideBarComponent } from "../admin-side-bar/admin-side-bar.component";
import { FooterComponent } from "../../../common/footer/footer.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Define Advertisement interface if not imported from elsewhere
interface Advertisement {
  id: number;
  title: string;
  postedDate: string;
  status: string; // e.g., 'pending', 'approved', 'rejected'
  price: number;
  location?: string;
  createdAt?: string;

  
  // Add other fields as needed
}

@Component({
  selector: 'app-admin-manageadds',
  imports: [AdminSideBarComponent, FooterComponent, HttpClientModule, CommonModule,FormsModule],
  templateUrl: './admin-manageadds.component.html',
  styleUrl: './admin-manageadds.component.css'
})
export class AdminManageaddsComponent {
ads: Advertisement[] = [];
filteredAds: Advertisement[] = [];
searchQuery: string = '';
  constructor(private http: HttpClient) {}

ngOnInit(): void {
  this.fetchAds();
}

fetchAds(): void {
  this.http.get<Advertisement[]>('http://localhost:8080/api/car-ads').subscribe({
    next: (data) => {
      this.ads = data;
      this.filteredAds = data;
      this.ads.forEach(ad => {
        ad.status =  'Pending'; // Default status, can be changed based on your logic
      });
    },
    error: (err) => console.error('Error fetching ads', err)
  });
}

filterAds(): void {
  const query = this.searchQuery.toLowerCase();
  this.filteredAds = this.ads.filter(ad =>
    ad.title.toLowerCase().includes(query) ||
    ad.postedDate.toLowerCase().includes(query)
  );
}

approveAd(adId: number): void {
  // Call backend to approve
}

rejectAd(adId: number): void {
  // Call backend to reject
}

editAd(adId: number): void {
  // Navigate to edit form
}

deleteAd(adId: number): void {
  if (confirm('Are you sure to delete this ad?')) {
    this.http.delete(`http://localhost:8080/api/car-ads/${adId}`).subscribe({
      next: () => this.fetchAds(),
      error: (err) => console.error('Failed to delete ad', err)
    });
  }
}

openAddAdForm(): void {
  // Open modal or navigate to add form
}
}
