import { Component } from '@angular/core';
import { FooterComponent } from "../../../common/footer/footer.component";
import { NavbarComponent } from "../../../common/navbar/navbar.component";
import { AdminSideBarComponent } from "../admin-side-bar/admin-side-bar.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';

interface Advertisement {
  
  id: number;
  title: string;
 
}
interface Users {
  id: number;
  name: string;
  email: string;
  imgUrl: string;
}
@Component({
  selector: 'app-admin-dashboard',
  imports: [FooterComponent, NavbarComponent, AdminSideBarComponent, HttpClientModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})

export class AdminDashboardComponent {

  advertisements: Advertisement[] = [];
  Users: Users[] = [];
  totalAds: number = 0;
  totalUsers: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchAds();
    this.fetchUsers();
  }

  fetchAds(): void {
    this.http.get<Advertisement[]>('http://localhost:8080/api/car-ads')
      .subscribe({
        next: (data) => {
          this.advertisements = data;
          this.totalAds = data.length;
          console.log('Total Ads:', this.totalAds);
        },
        error: (err) => console.error('Error fetching ads', err)
      });
  }



 fetchUsers(): void {
    this.http.get<Users[]>('http://localhost:8080/api/users')
      .subscribe({
        next: (data) => {
          this.Users = data;
          this.totalUsers = data.length;
          console.log('Total Users:', this.totalUsers);
        },
        error: (err) => console.error('Error fetching users', err)
      });
  }


  

}
