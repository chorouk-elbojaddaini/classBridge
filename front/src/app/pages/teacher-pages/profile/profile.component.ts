import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
export interface UserUpdate{
  firstName:''
  lastName:''
  email:''
  password:''
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
userUpdated: UserUpdate= {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};
passwordForm: FormGroup;

constructor(private userService:UserServiceService,private formBuilder: FormBuilder){
  const authUserJSON:any = localStorage.getItem("authUser");
    this.user = JSON.parse(authUserJSON);
    this.passwordForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    });
}

onUpdateUser(){
  
this.userService.updateUser(this.userUpdated,this.user.id).subscribe(
  {
     next:(response) =>{
      console.log("success")
      if(this.userUpdated.firstName !== ""){
        this.user.firstName = this.userUpdated.firstName;
      }
     }, 
     error: (error) => console.log(error)
  }
)
}
updatePassword() {
  const passwordControl = this.passwordForm.get('password');
  if (passwordControl !== null && this.passwordForm.valid) {
    const newPassword = passwordControl.value;
    //je fais ca parce que c'est toujours userUpdated que je dois passer en parametre pour la fonction updateUser
    this.userUpdated.password = newPassword;
    //ici j'appelle la fonction 
    this.userService.updateUser(this.userUpdated,this.user.id).subscribe({
      next:(response) => console.log("success"),
      error:(e) => console.log(e)
    })
  } else {
    this.passwordForm.markAllAsTouched();
  }
}

ngOnInit(){
  console.log("salut",this.user.lastName)
}
}
