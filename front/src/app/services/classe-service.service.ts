import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Classe } from '../models/classe';

@Injectable({
  providedIn: 'root'
})
export class ClasseServiceService {
  
  private baseUrl = 'http://localhost:8090'; 

  constructor(private http: HttpClient) {}

  getAllClasses(userId: number) {
    return this.http.get<Classe[]>(`${this.baseUrl}/classe/${userId}`);
  }
}
