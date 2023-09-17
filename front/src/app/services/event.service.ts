import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private baseUrl = 'http://localhost:8090/events'; 

  constructor(private http:HttpClient) { }

  createEvent(eventData: any, userId: number) {
    return this.http.post(`${this.baseUrl}?userId=${userId}`, eventData);
  }

  getEvents(userId: number) {
    return this.http.get(`${this.baseUrl}?userId=${userId}`);
  }
}
