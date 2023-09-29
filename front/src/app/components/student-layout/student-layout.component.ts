import { Component } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';


@Component({
  selector: 'app-student-layout',
  templateUrl: './student-layout.component.html',
  styleUrls: ['./student-layout.component.scss']
})
export class StudentLayoutComponent {

  cards = [
    {
      title: 'Course',
      imagePath: 'assets/students-section/course.png'
    },
    {
      title: 'Messages',
      imagePath: 'assets/students-section/messages.png'
    },
    {
      title: 'Notes',
      imagePath: 'assets/students-section/notes.png'
    }
  ]
 

  selectedCard: string | null = 'Course';

  toggleContent(title: string) {
    if (this.selectedCard === title) {
      this.selectedCard = null;
    } else {
      this.selectedCard = title;
    }

    console.log("selected",this.selectedCard);
  }




}
