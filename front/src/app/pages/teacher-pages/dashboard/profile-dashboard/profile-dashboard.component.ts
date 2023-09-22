import { Component } from '@angular/core';
import { dE } from '@fullcalendar/core/internal-common';
import { ClasseServiceService } from 'src/app/services/classe-service.service';
import { CourseService } from 'src/app/services/course.service';
import { StudentService } from 'src/app/services/student.service';
interface User{
  firstName:string,
  lastName:string,
  img:string
}
@Component({
  selector: 'app-profile-dashboard',
  templateUrl: './profile-dashboard.component.html',
  styleUrls: ['./profile-dashboard.component.scss']
})
export class ProfileDashboardComponent {
  user: any;
  courses:any = [];
  userId:any;
  tasks = ['do homework','reading a book','attribute a course'];
  initialCount = 2;
  displayedCourses: any[] = [];
  displayedTasks: any[] = [];
  clicked :boolean =false;
  clickedTask:boolean = false;
  constructor(private studentService:StudentService,private classeService:ClasseServiceService,private courseService:CourseService){
    this.userId = localStorage.getItem("id");
    
    this.displayedTasks = this.tasks.slice(0, this.initialCount);
    // this.displayMore = this.packs.slice(0, this.initialCount);
  }

  ngOnInit(){
    const authUserJSON:any = localStorage.getItem("authUser");
    this.user = JSON.parse(authUserJSON);
    this.CalculNumbers(this.userId);
   
  }

  viewAll() {
    this.displayedCourses = this.courses;
    this.clicked = true;
  }
  viewLess(){
    const course1 = this.courses[0];
    const course2 = this.courses[1];
    this.displayedCourses = [course1,course2];
    this.clicked = false;
  }
  viewAllTasks() {
    this.displayedTasks = this.tasks;
    this.clickedTask = true;
  }
  viewLessTasks(){
    this.displayedTasks = this.tasks.slice(0, this.initialCount);
    this.clickedTask = false;
  }

  CalculNumbers(id:number){
    this.classeService.getAllClasses(id).subscribe({
      next:(r) => {
        r.forEach((classe) =>
          this.courseService.getAllCourses(classe.idClass).subscribe({
            next:(response:any) => {
              this.courses.push(...response);
              const course1 = this.courses[0];
              const deuxieme = this.courses[1];
              this.displayedCourses = [course1,deuxieme];
            }
          })
          );
          
        console.log(r)},
      error:(e) => console.log(e)
    })
  }
  
}
