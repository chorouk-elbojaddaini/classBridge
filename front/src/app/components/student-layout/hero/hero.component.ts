import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private userService:UserServiceService,private router:Router){
    this.userId = localStorage.getItem("idStudent");
    
 }

 ngOnInit(){
   this.getUser(this.userId);
 }

  getUser(userId:any){
    this.userService.getUser(userId).subscribe({
      next:(response:any) =>{
        this.user = response;
      },
      error:(error)=> console.log(error)
    })
    
  }

  logout(){
    localStorage.removeItem("idStudent");
    localStorage.removeItem("authUser");
    this.router.navigate(['/home']); // Remplace '/accueil' par le chemin de ta page d'accueil
    // Ajoute d'autres actions de déconnexion si nécessaire
  }
}
