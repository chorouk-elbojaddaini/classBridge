import { Component } from '@angular/core';
import { Student } from 'src/app/models/student';
import studentsData from '../../../assets/data/studentsData.json';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {
  students : Student[] = studentsData;

  ngOnInit(){
    console.log(this.students);
  }
}
