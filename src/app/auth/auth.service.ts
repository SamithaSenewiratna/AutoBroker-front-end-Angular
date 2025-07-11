import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl = 'http://localhost:8080/auth'; // Adjust if deployed

  constructor(private http: HttpClient) {}

  /**
   * Login using "UserName" from form, map it to "email" for backend.
   */
  login(data: { UserName: string; password: string }) {
    const payload = {
      email: data.UserName, // 🔄 Map UserName -> email
      password: data.password
    };
    return this.http.post<{ token: string; role: string }>(`${this.baseUrl}/login`, payload);
  }

  /**
   * Register new user. Accepts a user object directly.
   */
  register(data: any) {
    return this.http.post(`${this.baseUrl}/register`, data);
  }

  /**
   * Store JWT token in localStorage.
   */
  saveToken(token: string) {
    localStorage.setItem('auth_token', token);
  }

  /**
   * Retrieve stored JWT token.
   */
  getToken() {
    return localStorage.getItem('auth_token');
  }

  /**
   * Remove JWT token (logout).
   */
  logout() {
    localStorage.removeItem('auth_token');
  }
}
