import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule,RouterLink],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  loginForm: FormGroup;
  loginFailed = false;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    this.http.get<any[]>('http://localhost:8080/api/users')
      .subscribe(users => {
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
          this.loginFailed = false;
          this.router.navigate(['/homePage']);
        } else {
          this.loginFailed = true;
        }
      }, error => {
        console.error('Login error:', error);
        this.loginFailed = true;
      });
  }
}
