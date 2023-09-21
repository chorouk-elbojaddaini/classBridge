import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from 'src/app/models/student';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styleUrls: ['./student-dialog.component.scss']
})
export class StudentDialogComponent {

  selectedClass:any;
 class:any;
 studentSelected:any;
 isEditing = false;
 editedNote: number | any;

 startEditing(student:Student) {
   this.isEditing = true;
   this.editedNote = student.note; 
 }

 updateNote(student:Student) {
   student.note = this.editedNote;
   this.isEditing = false;
  //  this.editedNote = null;
   this.studentService.updateNote(student.id,this.editedNote).subscribe({
    next:(response) => console.log(response),
    error:(error) => console.log(error)
   })
 }
  constructor(private sharedDataservice:SharedDataService,@Inject(MAT_DIALOG_DATA) public data: { student: Student },private studentService:StudentService){
     this.studentSelected = data.student;
  }

}
