import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthenticationResponse } from 'src/app/models/Authentication-response';
import { RegisterRequest } from 'src/app/models/register-request';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { VerifyEmailDialogueComponent } from './verify-email-dialogue/verify-email-dialogue.component';

@Component({
  selector: 'app-register-teacher',
  templateUrl: './register-teacher.component.html',
  styleUrls: ['./register-teacher.component.scss']
})
export class RegisterTeacherComponent {
  registerRequest : RegisterRequest = {
    id:0,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: '',
    enabled: false
  };
  message?:string;
  authResponse: AuthenticationResponse = {
    jwtToken: '',
    user: new RegisterRequest(
      0,
      '',
      '',
      '',
      '',
      '',
      false
    )
  };
  errorMessage = '';
  confirmationPassword ?:string;
  isLoading ?:boolean;

  constructor(private authService:AuthenticationService,private router:Router,private dialog: MatDialog){}
 
  passwordsMatch() {
    return this.registerRequest.password === this.confirmationPassword;
  }
  registerTeacher(){
    if (!this.passwordsMatch()) {
      this.errorMessage = "Les mots de passe ne correspondent pas.";
      return; 
    }else{
     this.isLoading = true;
     this.authService.register(this.registerRequest)
     .subscribe({
      next: (response) =>{ console.log(response)
      this.openDialog()
      },
      error: (e) => {
        if (e.status === 403) {
          this.errorMessage = "L'e-mail existe déjà. Veuillez en choisir un autre.";         
        }
       
          console.error(e); },
      complete: () =>{ console.info('complete') 
     this.isLoading = false}

  })
}
  }

  openDialog() {
    const dialogRef = this.dialog.open(VerifyEmailDialogueComponent);
  }

}
