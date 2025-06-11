import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink, FormsModule],
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  ngOnInit() {
     this.showSuccess = true;
  }
  
  
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  role: string = ''; 
  status: string = ''; 
  terms: boolean = false;

  imgUrl: string = 'https://example.com/default-profile.png';
  showSuccess: boolean = false;

  constructor(private router: Router) {}

  async signUp() {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    if (!this.terms) {
      alert('You must agree to the terms and conditions.');
      return;
    }

    const userPayload = {
      name: this.name,
      role: this.role || 'user',
      email: this.email,
      password: this.password,
      status: this.status || 'Active',
      imgUrl: this.imgUrl
    };

    try {
      const response = await fetch('http://localhost:8080/api/users/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userPayload)
      });

      if (response.ok) {
        this.showSuccess = true;

        setTimeout(() => {
          this.showSuccess = false;
          this.router.navigate(['/loginUser']);
        }, 1700);
      } else {
        const errorText = await response.text();
        console.error('Server error:', errorText);
        alert('Signup failed. Please try again.');
      }
    } catch (err) {
      console.error('Network error:', err);
      alert('Signup failed. Please check your connection and try again.');
    }
  }
}
