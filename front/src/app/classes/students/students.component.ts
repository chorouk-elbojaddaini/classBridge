import { Component } from '@angular/core';
import { Student } from 'src/app/models/student';
import studentsData from '../../../assets/data/studentsData.json';
import { MatDialog } from '@angular/material/dialog';
import { StudentDialogComponent } from './student-dialog/student-dialog.component';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {
  students : Student[] = studentsData;
   constructor(private dialog: MatDialog) {}
  ngOnInit(){
    console.log(this.students);
  }
  openDialog(){
    const dialogRef = this.dialog.open(StudentDialogComponent);
 
    dialogRef.afterClosed().subscribe((_result: any) => {
    });
  }
}
