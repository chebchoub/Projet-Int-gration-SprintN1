import { HttpClient } from '@angular/common/http';
import { Injectable, Optional } from '@angular/core';
import { User } from './user';
import { AuthenticationResponse } from './authentication-response';
import { Observable } from 'rxjs';
import { AuthenticationRequest } from './authentication-request';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {


  private baseUrl = 'http://localhost:8080/api/v1/auth';

  constructor(private http: HttpClient) {}

  register(request: User): Observable<Optional> {
    return this.http.post<AuthenticationResponse>(`${this.baseUrl}/register`, request);
  }
  login(request: AuthenticationRequest): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>(`${this.baseUrl}/authenticate`, request);
  }
}
