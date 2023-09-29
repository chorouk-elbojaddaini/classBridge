import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

export interface UserUpdate{
  firstName:''
  lastName:''
  email:''
  password:''
}
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private baseUrl : string = 'http://localhost:8090/auth';

  constructor(private http:HttpClient) { }

  updateUser(user:UserUpdate,userId:number){
    return this.http.put<User>(`${this.baseUrl}/update/${userId}`,user);
  }

  findUserByEmail(email:String){
    return this.http.get<User>(`${this.baseUrl}/email/${email}`);

  }
  
   getUser(userId:number){
    return this.http.get(`${this.baseUrl}/get/${userId}`);
   }
 
}
