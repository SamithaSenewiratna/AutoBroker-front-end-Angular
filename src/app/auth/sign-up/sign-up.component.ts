import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink, FormsModule,HttpClientModule],
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent   {
name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  role: string = '';
  terms: boolean = false;

  signupFailed: boolean = false;
  showSuccess: boolean = false;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {}

  signUp() {
    if (
      !this.name ||
      !this.email ||
      !this.password ||
      !this.confirmPassword ||
      !this.role ||
      !this.terms ||
      this.password !== this.confirmPassword
    ) {
      this.signupFailed = true;
      return;
    }

    const signupData = {
      username: this.name,
      email: this.email,
      password: this.password,
      role: this.role
    };

    this.http.post<any>('http://localhost:8080/auth/register', signupData).subscribe({
      next: () => {
       

          alert('Account created successfully!');
          this.router.navigate(['/loginUser']);


    
      },
      error: (err) => {
        console.error('Signup error:', err);
        this.signupFailed = true;
      }
    });
  }
  
}
