import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private baseUrl : string = 'http:localhost:8090/auth';
  constructor(private http:HttpClient) { }
}
