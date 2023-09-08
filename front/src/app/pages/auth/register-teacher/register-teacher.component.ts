import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationResponse } from 'src/app/models/Authentication-response';
import { RegisterRequest } from 'src/app/models/register-request';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-register-teacher',
  templateUrl: './register-teacher.component.html',
  styleUrls: ['./register-teacher.component.scss']
})
export class RegisterTeacherComponent {
  registerRequest : RegisterRequest = {};
  message?:string;
  authResponse: AuthenticationResponse = {
    jwtToken: '',
    user: new RegisterRequest
  };


  constructor(private authService:AuthenticationService,private router:Router){}
  
  registerTeacher(){
    console.log("objet",this.registerRequest);
    this.message = '';
     this.authService.register(this.registerRequest)
     .subscribe({
      next: (response) => console.log(response),
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
  })
  
  }


}
