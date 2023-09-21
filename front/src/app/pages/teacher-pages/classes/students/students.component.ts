import { Component } from '@angular/core';
import { Student } from 'src/app/models/student';
import studentsData from '../../../../../assets/data/studentsData.json';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { StudentDialogComponent } from './student-dialog/student-dialog.component';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { StudentService } from 'src/app/services/student.service';
import { S, er } from '@fullcalendar/core/internal-common';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {
  students : Student[] =[];
  selectedClass:any;
  classCode:any;
  numberStudents:number = 0;
  deleteBtn:boolean = false;

   constructor(private dialog: MatDialog,private sharedDataService:SharedDataService,private studentService:StudentService) {
    this.selectedClass = this.sharedDataService.getSelectedClass(); 
    this.classCode = localStorage.getItem('classCode');
    console.log("classe code",this.classCode);
   }
   ngDoCheck(){
    if(this.deleteBtn){
      this.getAllStudents();
      this.deleteBtn = false;
    }
   }
  ngOnInit(){
    console.log(this.students);
    this.getAllStudents();

  }


  openDialog(student: Student){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { student }; 
  
    const dialogRef = this.dialog.open(StudentDialogComponent, dialogConfig);
  
    dialogRef.afterClosed().subscribe((_result: any) => {
    });
  }


  getAllStudents(){
    this.studentService.findByCodeClass(this.classCode).subscribe({
      next:(Response:any) => {
        this.numberStudents = Response.length;
        this.studentService.findClass(this.classCode).subscribe({
          next:(classe:any) => {
            this.students.forEach(student => {
              student.fieldName = classe.fieldName;
              student.level = classe.level;
            });
        }})
        this.students = Response.map((objet:any) => {
          return {
            id:objet.id,
            firstName: objet.user.firstName,
            lastName: objet.user.lastName,
            email: objet.user.email,
            note: objet.note, 
          };
        });
      console.log("response hadi",this.students)},
      error:(error) => console.log(error)
    })
  }



  deleteStudent(id:number){
 
      this.studentService.deleteStudent(id).subscribe({
      next:() =>{
        alert("Étudiant supprimé avec succès!");
        console.log("deleted successfully!");
        this.deleteBtn = true;
      },
      error:(e) =>{
        alert("ID de l'utilisateur n'existe pas");
        console.log("User Id doesn't exist");
      }
    })
  }
}
