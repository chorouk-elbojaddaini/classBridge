import { Component } from '@angular/core';
import { VerifyEmailDialogueComponent } from '../register-teacher/verify-email-dialogue/verify-email-dialogue.component';
import { RegisterRequest } from 'src/app/models/register-request';
import { AuthenticationResponse } from 'src/app/models/Authentication-response';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.scss']
})
export class RegisterStudentComponent {
  registerRequest : RegisterRequest = {
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
  registerStudent(){
    if (!this.passwordsMatch()) {
      this.errorMessage = "Les mots de passe ne correspondent pas.";
      return; 
    }else{
     this.isLoading = true;
     this.authService.registerStudent(this.registerRequest)
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
