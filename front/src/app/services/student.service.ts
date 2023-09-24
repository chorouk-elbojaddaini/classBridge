import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = 'http://localhost:8090/etudiants'; 
  private url = 'http://localhost:8090/classe'; 
  constructor(private http:HttpClient) { }

  joinClass(data:any){
    return this.http.post(`${this.baseUrl}/add`, data);
  }
  findByCodeClass(code:any){
    return this.http.get(`${this.baseUrl}?classCode=${code}`);

  }
  findClass(code:any){
    return this.http.get(`${this.url}?code=${code}`);

  }

  deleteStudent(id:number){
    return this.http.delete(`${this.baseUrl}/delete?id=${id}`);
  }

  updateNote(id: number, note: number) {
    return this.http.put(`${this.baseUrl}/updateNote/${id}?note=${note}`, {});
  }
  
  getClassCodes(id:any){
    return this.http.get(`${this.baseUrl}/get/${id}`);
  }
}
