import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink, FormsModule],
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  terms: boolean = false;

  imgUrl: string = 'https://example.com/default-profile.png';

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
      email: this.email,
      password: this.password,
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
        alert('Account created successfully!');
        this.router.navigate(['/loginUser']);
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
