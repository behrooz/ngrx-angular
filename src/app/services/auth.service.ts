import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private BASE_URL = "http://localhost:1337";

  constructor(private http : HttpClient) { }

  getToken(): string{
    return localStorage.getItem("token");
  }

  logIn(email: string, password: string): Observable<any>{
    const url = '${this.BASE_URL}/login';
    return this.http.post<User>(url, {email, password});
  }
  signUp(email: string, password: string): Observable<any>{
    const url = '${this.BASE_URL}/signUp';
    return this.http.post(url, {email, password});
  }
  
}
