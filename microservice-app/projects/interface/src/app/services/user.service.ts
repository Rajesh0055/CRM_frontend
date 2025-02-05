import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define the RegisterUser class
export class RegisterUser {
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(init?: Partial<RegisterUser>) {
    Object.assign(this, init);
  }
}

@Injectable({
  providedIn: 'root', // Ensures the service is available globally
})
export class UserService {
  private apiUrl = 'https://localhost:7011/api/User/register'; // API Endpoint

  constructor(private http: HttpClient) {}

  // ✅ Ensure this method exists
  registerUser(user: RegisterUser): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.apiUrl, user, { headers });
  }
}
