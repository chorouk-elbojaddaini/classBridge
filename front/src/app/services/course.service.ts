import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private baseUrl = 'http://localhost:8090/courses'; 

  constructor(private http:HttpClient) { }

  addCourse(course: Course) {
    return this.http.post(`${this.baseUrl}`, course);
  }

  getAllCourses(idClass:any){
    return this.http.get(`${this.baseUrl}?idClass=${idClass}`);

  }
}
