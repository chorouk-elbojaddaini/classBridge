import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConversationService {
   
  private baseUrl = 'http://localhost:8090/conversation'; 
  private url = 'http://localhost:8090/message'; 
  constructor(private http: HttpClient) {}

 

  createConversation(data:any){
    return this.http.post(`${this.baseUrl}/add`,data);

  }

  addMessage(data:any){
    return this.http.post(`${this.url}/add`,data);

  }

  getConversationByTeacherId(id:any){
    return this.http.get(`${this.baseUrl}/teacher/${id}`);
  }
  getConversationByStudentId(id:any){
    return this.http.get(`${this.baseUrl}/student/${id}`);
  }

  getMessages(conversationId:any){
    return this.http.get(`${this.baseUrl}/${conversationId}/messages`);
   
  }
}
