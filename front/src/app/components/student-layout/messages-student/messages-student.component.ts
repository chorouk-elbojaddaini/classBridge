import { Component } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { ClasseServiceService } from 'src/app/services/classe-service.service';
import { CourseService } from 'src/app/services/course.service';
import { ConversationService } from 'src/app/services/conversation.service';

import { format, parseISO } from 'date-fns';
export interface Conversation {
  idConversation:number,
  firstName: string,
  lastName: "",
  field: "",
  level:"",
  courseJoined: "",
  message: any,
  date: Date

}
@Component({
  selector: 'app-messages-student',
  templateUrl: './messages-student.component.html',
  styleUrls: ['./messages-student.component.scss']
})
export class MessagesStudentComponent {
  public clicked: boolean = false;
  public one_message: boolean = false;
  selectedStudent: Conversation | null = null;
  userId: any;
  messagesArray: Conversation[] = [];
  oneConversation: Conversation = {
    idConversation: 0,
    firstName: "",
    lastName: "",
    field: "",
    level:"",
    courseJoined: "",
    message: [],
    date: new Date()
  };
  userEmail:string |null;
  messageTosend:any = 
  {
    content: "",
    senderEmail: "",
    conversation: {
      idConversation: 0
    }
  };
  message: string = '';
  constructor(private studentService: StudentService, private classeService: ClasseServiceService, private courseService: CourseService, private conversationService: ConversationService) {
    this.userId = localStorage.getItem("idStudent");
    this.userEmail = localStorage.getItem("emailStudent");
    console.log("hada email",this.userEmail);
    this.messageTosend.senderEmail = this.userEmail;
  }


  ngOnInit() {
    this.getConversationByStudentId(this.userId);
  //  console.log("email",this.userEmail);
  }


  ngDoCheck() {
    // console.log(this.one_message)
    if(this.one_message){
      console.log("ahhhh");
      
      this.one_message = false;
    }
    // if (this.students.length == 1) {
    //   this.one_message = true;
    // } else {
    //   this.one_message = false;
    // }
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

  getConversationByStudentId(id: any) {
    if(!this.one_message){
      
    }
    this.conversationService.getConversationByStudentId(id).subscribe({
      next: (response: any) => {
        response.forEach((element: any) => {

          const conversation = {
            idConversation : element.idConversation,
            firstName: element.teacher.firstName,
            lastName: element.teacher.lastName,
            courseJoined: element.course.courseName,
            date: element.course.date,
            field: element.course.classe.fieldName,
            level: element.course.classe.level,
            message: []
          };
          
          this.conversationService.getMessages(element.idConversation).subscribe({
            next: (r:any) => {
              conversation.message = r;
               this.messagesArray.push(conversation);
            
            }
          })
        });


        // console.log("hado msgs", this.messagesArray)
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

sendMsg(selectedStudent:Conversation){
   const select = selectedStudent;
    // console.log("idConver",selectedStudent.idConversation);    
      this.messageTosend.conversation.idConversation = selectedStudent.idConversation;
     this.messageTosend.content = this.message;
      this.conversationService.addMessage(this.messageTosend).subscribe({
       next:(response) => {
        this.one_message = true;
        console.log("hadi reponse d send",response)},
        error:(error) => console.log(error)
      })
    // console.log(this.message);
    
    this.message = '';
}
}
