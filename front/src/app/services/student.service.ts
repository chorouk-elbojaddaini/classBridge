import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = 'http://localhost:8090/student'; 

  constructor(private http:HttpClient) { }

  joinClass(data:any){
    return this.http.post(`${this.baseUrl}/add`, data);
  }

}
