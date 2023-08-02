import { Component } from '@angular/core';
import  './studentInfo';
import { from } from 'rxjs';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent {
  public clicked: boolean = false;
  students: studentInfo[] = [
    {
      firstName: "Chorouk",
      lastName: "EL BOJADDAINI",
      field: "GI 4ème année",
      courseJoined: "Chapitre 1 : introduction au réseau",
      message: "Lorem ipsum dolor sit amet, consectetur, Lorem ipsum dolor sit amet, consectetur,Lorem ipsum dolor sit amet, consectetur",
      date:"25 jul 2023 15:00"

    },
    {
      firstName: "Rim",
      lastName: "HASSANI IDRISSI",
      field: "GSEIR 3ème année",
      courseJoined: "Chapitre 1 : introduction au réseau",
      message: "Hi there, I'm Jane!",
      date:"25 jul 2023 15:00"
    },
  ];
  selectedStudent: studentInfo | null = null;


  displayDetails(student:studentInfo): void {
    this.clicked = true;
  this.selectedStudent= student;
  }
  getFirstSentence(message: string): string {
    const words = message.split(' ');
    const firstFourWords = words.slice(0, 4);
    return firstFourWords.join(' ');
  }


  removeCard():void{
    this.selectedStudent= null;
    this.clicked = false;
  }
  deleteMessage(student:studentInfo){
      this.students = this.students.filter(s => s != student);
      this.clicked = false;
      this.selectedStudent = null;
  }
}
