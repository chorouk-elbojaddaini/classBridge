import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentModel } from 'src/app/models/studentModel';
import { User } from 'src/app/models/user';
import { ClasseServiceService } from 'src/app/services/classe-service.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-courses-student',
  templateUrl: './courses-student.component.html',
  styleUrls: ['./courses-student.component.scss']
})
export class CoursesStudentComponent {

  joinClicked: boolean = false;

  user: User = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: '',
    enabled: false
  };
  joinClassForm: FormGroup;
  codeNotFound = '';
  studentData: StudentModel = {
    user: new User(
      0,
      '',
      '',
      '',
      '',
      '',
      false
    ),
    classCode: ''
  };
   courses:any[] = [];
  constructor(private studentService: StudentService,private classeService:ClasseServiceService, private formBuilder: FormBuilder) {
    const authUserJSON: any = localStorage.getItem("authUser");
    this.user = JSON.parse(authUserJSON);

    this.joinClassForm = this.formBuilder.group({
      code: ['', [Validators.required]],
    });


    this.studentData.user.id = this.user.id;
    this.studentData.user.firstName = this.user.firstName;
    this.studentData.user.lastName = this.user.lastName;
    this.studentData.user.role = this.user.role;
    this.studentData.user.enabled = this.user.enabled;
    this.studentData.user.email = this.user.email;
    this.studentData.user.password = this.user.password;



  }


ngOnInit(){
  this.getCourses(this.studentData.user.id);
}


  clickBtn() {
    this.joinClicked = !this.joinClicked;
  }

  // joinClass() {
  //   const codeControl = this.joinClassForm.get('code');
  //   if (codeControl) {
  //     const codeValue = codeControl.value;
  //     console.log('Contenu du champ "code":', codeValue);
  //     this.studentData.codeJoinClass = codeValue;
  //     console.log("this student", this.studentData);
  //     this.studentService.joinClass(this.studentData).subscribe({
  //       next: (response) => {
  //         this.studentService.findByCodeClass(codeValue).subscribe({
  //         next:(response) => console.log(response)
  //         });
  //         console.log("next lwla shiha")

  //       },
  //       error: (e) => {
  //         if(e.status === 403){
  //           this.codeNotFound = "Ce code n'existe pas";
  //         }
  //       }
  //     })
  //   }
  // }
  joinClass() {
    const codeControl = this.joinClassForm.get('code');
    if (codeControl) {
      const codeValue = codeControl.value;
      console.log('Contenu du champ "code":', codeValue);
      this.studentData.classCode = codeValue;
      console.log("this student", this.studentData);
      this.studentService.joinClass(this.studentData).subscribe({
        next: (response) => {
          console.log("next lwla shiha",response);
          this.classeService.getCoursesByClassCode(codeValue).subscribe({
            next:(response) => {
              this.courses.push(response);
              console.log("hada course",this.courses)}
          });
        },
        error: (e) => {
          if (e.status === 403) {
            this.codeNotFound = "Ce code n'existe pas";
          }
        }
      });

    }
    
  }


  getCourses(userId:any){
    this.studentService.getClassCodes(userId).subscribe({
      next:(response:any) =>{
        response.forEach((code:any) => {
           this.classeService.getCoursesByClassCode(code).subscribe({
            next:(r) => {this.courses.push(r)
            console.log("yakma",this.courses)}
           })
        });
        
        
        console.log(response)},
      error:(error) => console.log(error)
    })
  }
  
  
}
