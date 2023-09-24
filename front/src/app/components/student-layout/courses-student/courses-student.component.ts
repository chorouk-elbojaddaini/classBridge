import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { C } from '@fullcalendar/core/internal-common';
import { StudentModel } from 'src/app/models/studentModel';
import { User } from 'src/app/models/user';
import { ClasseServiceService } from 'src/app/services/classe-service.service';
import { ConversationService } from 'src/app/services/conversation.service';
import { CourseService } from 'src/app/services/course.service';
import { SelectedItemService } from 'src/app/services/selected-item-service.service';
import { StudentService } from 'src/app/services/student.service';


export interface Data {
  studentId: number;
  teacherId: number;
  courseId: number;
}
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
   classes:any[] = [];
   courses:any[] = [];
   showOptions: boolean = false;
  selected:boolean = false;
  selectedClass:any;
  selectedItem: any = null;

  data: Data = {
    studentId: 0,
    teacherId: 0,
    courseId: 0
  };

  showTextarea: boolean = false;
  message: string = '';

  constructor(private studentService: StudentService,private classeService:ClasseServiceService,private courseService:CourseService,private selectedItemService:SelectedItemService,private conversationService:ConversationService, private formBuilder: FormBuilder) {
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

    this.data.studentId = this.user.id;

  }


ngOnInit(){
  this.getCourses(this.studentData.user.id);
  console.log("hadi data",this.data);
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
              this.classes.push(response);
              console.log("hada course",this.classes)}
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
            next:(r) => {this.classes.push(r)
            }
           })
        });
        
        
        console.log(response)},
      error:(error) => console.log(error)
    })
  }
  

  viewCourses(id:any){
    this.courseService.getAllCourses(id).subscribe({
      next:(response:any) => {
        this.courses = response;
      },
      error:(error) => console.log(error)
    })
  }

  formatDate(dateStr: string): string {
    return dateStr.split("T")[0];
  }

  toggleOptions(item:any) {
    this.showOptions = !this.showOptions;
    this.selectedItem = item;
  }

  onItemClick(item: any) {
    console.log("clicked");
    this.selected = !this.selected;
    this.selectedItem = item;
    this.selectedItemService.setSelectedItem(item);
  }


  createConversation(course:any){
    this.showTextarea = !this.showTextarea;
     this.data.courseId = course.idCourse;
     this.data.teacherId = course.classe.teacher.id;
     this.conversationService.createConversation(this.data).subscribe({
      next:(response) => console.log(response),
      error:(error) => console.log(error)
     })
  }

  sendMessage() {
    
    console.log(this.message);
    
    this.message = '';
  }
}
