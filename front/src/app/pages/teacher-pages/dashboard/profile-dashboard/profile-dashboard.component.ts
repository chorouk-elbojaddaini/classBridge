import { Component } from '@angular/core';
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
  user: User = {
    firstName: 'Anna',
    lastName: 'Marita',
    img: 'assets/dashboard-imgs/userImg.jpg'
  };
  courses = ['course 1','course 2','course 3' ];
  tasks = ['do homework','reading a book','attribute a course'];
  initialCount = 2;
  displayedCourses: any[] = [];
  displayedTasks: any[] = [];
  clicked :boolean =false;
  clickedTask:boolean = false;
  constructor() {
    this.displayedCourses = this.courses.slice(0, this.initialCount);
    this.displayedTasks = this.tasks.slice(0, this.initialCount);
    // this.displayMore = this.packs.slice(0, this.initialCount);


  }

  viewAll() {
    this.displayedCourses = this.courses;
    this.clicked = true;
  }
  viewLess(){
    this.displayedCourses = this.courses.slice(0, this.initialCount);
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
}
