import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = 'http://localhost:8090/student'; 
  private url = 'http://localhost:8090/classe'; 
  constructor(private http:HttpClient) { }

  joinClass(data:any){
    return this.http.post(`${this.baseUrl}/add`, data);
  }
  findByCodeClass(code:any){
    return this.http.get(`${this.url}?code=${code}`);

  }

}
