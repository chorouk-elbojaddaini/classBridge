import { Component } from '@angular/core';
import './studentInfo';

import { StudentService } from 'src/app/services/student.service';
import { ClasseServiceService } from 'src/app/services/classe-service.service';
import { CourseService } from 'src/app/services/course.service';
import { ConversationService } from 'src/app/services/conversation.service';

import { format, parseISO } from 'date-fns';
export interface Conversation {

  firstName: string,
  lastName: "",
  field: "",
  level:"",
  courseJoined: "",
  message: any,
  date: Date

}
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})


export class MessagesComponent {
  public clicked: boolean = false;
  public one_message: boolean = false;
  students: studentInfo[] = [
    {
      firstName: "Chorouk",
      lastName: "EL BOJADDAINI",
      field: "GI 4ème année",
      courseJoined: "Chapitre 1 : introduction au réseau",
      message: "Lorem ipsum dolor sit amet, consectetur, Lorem ipsum dolor sit amet, consectetur,Lorem ipsum dolor sit amet, consectetur",
      date: "25 jul 2023 15:00"

    },
    {
      firstName: "Rim",
      lastName: "HASSANI IDRISSI",
      field: "GSEIR 3ème année",
      courseJoined: "Chapitre 1 : introduction au réseau",
      message: "Hi there, I'm Jane!",
      date: "25 jul 2023 15:00"
    },
  ];
  selectedStudent: Conversation | null = null;
  userId: any;
  messagesArray: Conversation[] = [];
  oneConversation: Conversation = {
    firstName: "",
    lastName: "",
    field: "",
    level:"",
    courseJoined: "",
    message: [],
    date: new Date()
  };
  userEmail:string |null;
  constructor(private studentService: StudentService, private classeService: ClasseServiceService, private courseService: CourseService, private conversationService: ConversationService) {
    this.userId = localStorage.getItem("idUser");
    console.log("userId", this.userId);
    this.userEmail = localStorage.getItem("email");

  }


  ngOnInit() {
    this.getConversationByTeacherId(this.userId);
   console.log("email",this.userEmail);
  }


  ngDoCheck() {
    console.log(this.one_message)
    if (this.students.length == 1) {
      this.one_message = true;
    } else {
      this.one_message = false;
    }
  }

  displayDetails(student: any): void {
    this.clicked = true;
    this.selectedStudent = student;
  }
  getFirstSentence(message: string) {
    // const words = message.split(' ');
    // const firstFourWords = words.slice(0, 4);
    // return firstFourWords.join(' ');
  }


  removeCard(): void {
    this.selectedStudent = null;
    this.clicked = false;
  }
  deleteMessage(student: Conversation) {
    // this.students = this.students.filter(s => s != student);
    // this.clicked = false;
    // this.selectedStudent = null;
  }

  getConversationByTeacherId(id: any) {
    this.conversationService.getConversationByTeacherId(id).subscribe({
      next: (response: any) => {
        response.forEach((element: any) => {

          const conversation = {
            firstName: element.student.firstName,
            lastName: element.student.lastName,
            courseJoined: element.course.courseName,
            date: element.course.date,
            field: element.course.classe.fieldName,
            level: element.course.classe.level,
            message: []
          };
          // this.oneConversation.firstName = element.student.firstName;
          // this.oneConversation.lastName = element.student.lastName;
          // this.oneConversation.courseJoined = element.course.courseName;
          //  this.oneConversation.date = element.course.date;
          //  this.oneConversation.field = element.course.classe.fieldName;
          //  this.oneConversation.level = element.course.classe.level;
           
          // console.log("each element",element);
          // console.log("each element",this.messagesArray);
          this.conversationService.getMessages(element.idConversation).subscribe({
            next: (r:any) => {
              conversation.message = r;
              r.forEach((e:any) =>{
                console.log("emaills", this.userEmail);
                console.log("emas", r.senderEmail ? r.senderEmail.trim() : '');
                if(r.senderEmail='elbrajae80@gmail.com'){
                  console.log("yes")
                }
               
              }
             
                );
               this.messagesArray.push(conversation);
              // console.log("msgs", r)
            }
          })
        });


        console.log("hado msgs", this.messagesArray)
      },
      error: (error) => console.log(error)
    })
  }


  formatCustomDate(inputDate: string): string {
    try {
        const parsedDate = parseISO(inputDate);
        const formattedDate = format(parsedDate, "dd MMM yyyy HH:mm");
        return formattedDate;
    } catch (error) {
        console.error("Erreur de format de date : ", error);
        return "Date invalide"; 
    }
}
}
