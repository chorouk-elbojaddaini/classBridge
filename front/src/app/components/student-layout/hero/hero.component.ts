import { Component } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';


export interface UserDTO{
  firstName:"",
  lastName:"",
  email:""
}
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  userId:string | null;
   user:UserDTO = {
    firstName:"",
    lastName:"",
    email:""
   };

  constructor(private userService:UserServiceService){
    this.userId = localStorage.getItem("idStudent");
    console.log("hada userId",this.userId);
 }

 ngOnInit(){
   this.getUser(this.userId);
 }

  getUser(userId:any){
    this.userService.getUser(userId).subscribe({
      next:(response:any) =>{
        this.user = response;
        console.log("hada student",this.user);
      },
      error:(error)=> console.log(error)
    })
    
  }
}
