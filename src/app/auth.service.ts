import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl ='http://localhost:8080/api/auth';

  constructor(private http: HttpClient, private jwthelper: JwtHelperService) { }

  login(credentials: any){
    return this.http.post(`${this.baseUrl}/login`,credentials);
  }

  isAuthenticated(): boolean {
    const token =localStorage.getItem('token');
    return !this.jwthelper.isTokenExpired(token);
  }
}
