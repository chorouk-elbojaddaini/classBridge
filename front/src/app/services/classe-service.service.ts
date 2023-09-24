import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Classe } from '../models/classe';

@Injectable({
  providedIn: 'root'
})
export class ClasseServiceService {
  
  private baseUrl = 'http://localhost:8090/classe'; 

  constructor(private http: HttpClient) {}

  getAllClasses(userId: number) {
    return this.http.get<Classe[]>(`${this.baseUrl}/${userId}`);
  }

  addClasse(classe:Classe){
    return this.http.post<Classe>(`${this.baseUrl}/add`,classe);

  }
  getCoursesByClassCode(code:any){
    return this.http.get(`${this.baseUrl}?code=${code}`);
  }
}
