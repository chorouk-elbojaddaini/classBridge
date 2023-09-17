import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterRequest } from '../models/register-request';
import { AuthenticationResponse } from '../models/Authentication-response';
import { AuthenticationRequest } from '../models/authentication-request';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private baseUrl : string = 'http://localhost:8090/auth';
  constructor(private http:HttpClient) { }
  
  register(registerRequest:RegisterRequest){
    return this.http.post<AuthenticationResponse>(`${this.baseUrl}/register`,registerRequest);
  }
  registerStudent(registerRequest:RegisterRequest){
    return this.http.post<AuthenticationResponse>(`${this.baseUrl}/registerStudent`,registerRequest);
  }

  authenticate(authRequest:AuthenticationRequest){
    return this.http.post<AuthenticationResponse>(`${this.baseUrl}/authenticate`,authRequest);
  }


}
