import { Component } from '@angular/core';
import { Student } from 'src/app/models/student';
import studentsData from '../../../../../assets/data/studentsData.json';
import { MatDialog } from '@angular/material/dialog';
import { StudentDialogComponent } from './student-dialog/student-dialog.component';
import { SharedDataService } from 'src/app/services/shared-data.service';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {
  students : Student[] = studentsData;
  selectedClass:any;
  classCode:any;
   constructor(private dialog: MatDialog,private sharedDataService:SharedDataService) {
    this.selectedClass = this.sharedDataService.getSelectedClass(); 
    this.classCode = localStorage.getItem('classCode');
    console.log("classe code",this.classCode);
   }
  ngOnInit(){
    console.log(this.students);
  }
  openDialog(){
    const dialogRef = this.dialog.open(StudentDialogComponent);
 
    dialogRef.afterClosed().subscribe((_result: any) => {
    });
  }
}
