import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private baseUrl : string = 'http://localhost:8090/auth';

  constructor(private http:HttpClient) { }

  updateUser(user:User,userId:number){
    return this.http.get<User>(`${this.baseUrl}/update/${userId}`);
  }
}
