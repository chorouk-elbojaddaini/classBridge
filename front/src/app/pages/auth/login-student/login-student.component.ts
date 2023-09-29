import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationResponse } from 'src/app/models/Authentication-response';
import { AuthenticationRequest } from 'src/app/models/authentication-request';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login-student',
  templateUrl: './login-student.component.html',
  styleUrls: ['./login-student.component.scss']
})
export class LoginStudentComponent {
  authRequest : AuthenticationRequest = {
    email: '',
    password: ''
  };
  message?:string;

  authResponse: AuthenticationResponse = {
    jwtToken: '',
    user: new User(
      0,
      '',
      '',
      '',
      '',
      '',
      false
    )
  };


   constructor(private authService:AuthenticationService,private router:Router){}

   authenticate(){
    console.log("hello")
     this.authService.authenticate(this.authRequest)
     .subscribe({
      next: (response) =>{ console.log(response)
        this.authResponse = response;
        console.log("authResponse",this.authResponse);
        localStorage.setItem('authResponse', this.authResponse.jwtToken);
        localStorage.setItem('authUser', JSON.stringify(this.authResponse.user));
        localStorage.setItem('idStudent', this.authResponse.user.id.toString());

        this.router.navigate(['/studentDashboard']);
      },
      error: (e) => {
        
       
          console.error(e); } 
    

  })
}
}
