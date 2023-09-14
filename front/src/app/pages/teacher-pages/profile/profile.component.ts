import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserServiceService } from 'src/app/services/user-service.service';

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
user:User = {
  id: 0,
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  role: '',
  enabled: false
};
constructor(private userService:UserServiceService){
  const authUserJSON:any = localStorage.getItem("authUser");
    this.user = JSON.parse(authUserJSON);
}
ngOnInit(){
  console.log("salut",this.user.id)
}
}
