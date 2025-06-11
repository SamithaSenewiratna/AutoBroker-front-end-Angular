import { Component } from '@angular/core';
import { AdminSideBarComponent } from "../admin-side-bar/admin-side-bar.component";
import { FooterComponent } from "../../../common/footer/footer.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface User {
  id: number;
  name: string;
  email: string;
  imgUrl: string;
  role: string;
  status: string;
}

@Component({
  selector: 'app-admin-manage-users',
  standalone: true,
  imports: [AdminSideBarComponent, FooterComponent, HttpClientModule, CommonModule, FormsModule],
  templateUrl: './admin-manage-users.component.html',
  styleUrls: ['./admin-manage-users.component.css']
})
export class AdminManageUsersComponent {
  Users: User[] = [];
  totalUsers: number = 0;
  statusOptions: string[] = ['Active', 'Inactive', 'Banned'];
  newUser: Partial<User> = { name: '', email: '', imgUrl: '', role: '', status: 'Active' };
  editingUserId: number | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.http.get<User[]>('http://localhost:8080/api/users')
      .subscribe({
        next: (data) => {
          this.Users = data.map(user => ({ ...user, status: user.status || 'Active' }));
          this.totalUsers = data.length;
        },
        error: (err) => console.error('Error fetching users', err)
      });
  }

  addUser(): void {
    this.http.post<User>('http://localhost:8080/api/users', this.newUser)
      .subscribe({
        next: (user) => {
          this.Users.push(user);
          this.newUser = { name: '', email: '', imgUrl: '', role: '', status: 'Active' };
          this.totalUsers++;
        },
        error: (err) => console.error('Error adding user', err)
      });
  }

  updateUser(user: User): void {
    this.http.put<User>(`http://localhost:8080/api/users/${user.id}`, user)
      .subscribe({
        next: () => {
          this.editingUserId = null;
        },
        error: (err) => console.error('Error updating user', err)
      });
  }

  deleteUser(userId: number): void {
    this.http.delete(`http://localhost:8080/api/users/${userId}`)
      .subscribe({
        next: () => {
          this.Users = this.Users.filter(user => user.id !== userId);
          this.totalUsers--;
        },
        error: (err) => console.error('Error deleting user', err)
      });
  }

  startEdit(userId: number): void {
    this.editingUserId = userId;
  }

  cancelEdit(): void {
    this.editingUserId = null;
    this.fetchUsers();
  }
}