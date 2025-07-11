import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule,RouterLink],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  loginForm!: FormGroup;
  loginFailed: boolean = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      UserName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.invalid) return;

    const loginData = {
      username: this.loginForm.value.UserName, 
      password: this.loginForm.value.password
    };

    this.http.post<any>('http://localhost:8080/auth/login', loginData).subscribe({
      next: (res) => {
        if (res.token) {
          localStorage.setItem('token', res.token);
          alert('Login successful');
            
        const helper = new JwtHelperService();
        const decodedToken = helper.decodeToken(res.token);
        const role = decodedToken?.role;

        if (role === 'ADMIN') {
          this.router.navigate(['/admin-dashboard']);
        } else if (role === 'USER') {
          this.router.navigate(['/AllAds']);
        } else {
          this.loginFailed = true;
        }
      } else {
        this.loginFailed = true;
      }
    },
    error: (err) => {
      console.error('Login error', err);
      this.loginFailed = true;
    }
  });
}
}
