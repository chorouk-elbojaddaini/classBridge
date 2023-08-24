import { Component } from '@angular/core';

interface professor{
  firstName:string;
  lastName:string;
  // password:string;
  email:string;
  image:string;
  numberStudents:number;
  numberCourses:number;
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  professor:professor = {
    firstName:'Annee',
  lastName:'Luxivar',
  email:'anneeLuxi1452@gmail.com',
  image:'assets/classes-imgs/no-img.png',
  numberStudents:65,
  numberCourses:12
}
}