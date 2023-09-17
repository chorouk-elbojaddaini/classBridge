import { Component } from '@angular/core';

@Component({
  selector: 'app-courses-student',
  templateUrl: './courses-student.component.html',
  styleUrls: ['./courses-student.component.scss']
})
export class CoursesStudentComponent {

  joinClicked:boolean= false;

  joinClass(){
    this.joinClicked = !this.joinClicked;
  }
}
