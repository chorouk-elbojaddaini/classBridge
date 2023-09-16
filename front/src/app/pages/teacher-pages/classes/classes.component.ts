import { Component } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ChoixDialogComponent } from '../choix-dialog/choix-dialog.component';
import classesInfo from '../../../../assets/data/classesData.json';
import { ClasseServiceService } from 'src/app/services/classe-service.service';
import { User } from 'src/app/models/user';
import { Classe } from 'src/app/models/classe';
@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent {
  public choose: boolean = false;
  classesData = classesInfo;
  variable1Recue: boolean = false;
  variable2Recue: boolean = false;
  user : User = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: '',
    enabled: false
  };

  idTeacher?:any;
  classes: Classe[] = [];

  constructor(private dialog: MatDialog,private classeService: ClasseServiceService) { 
    const authUserJSON:any = localStorage.getItem("authUser");
    this.user = JSON.parse(authUserJSON);
    this.idTeacher = this.user.id;
  }

  ngOnInit(){
    console.log("id teacher",this.classes.length);
    this.classeService.getAllClasses(this.idTeacher)
    .subscribe(classes => {
      // console.log(classes);
      this.classes = classes;
    });
    
  }
  // dans le cas ou je vais faire que une fois ajouter ou supprimer une classe synch
  // ngDoCheck(){
  //   this.classeService.getAllClasses(this.idTeacher)
  //   .subscribe(classes => {
  //     console.log(classes);
  //     this.classes = classes;
  //   });
  // }


  redirectTo() {
    this.variable2Recue = false;
    this.variable1Recue = false;
  }
  recevoirVariable1(variable: boolean) {
    this.variable1Recue = variable;
  }

  recevoirVariable2(variable: boolean) {
    this.variable2Recue = variable;
  }
 

  viewClasses() {
    this.choose = true;
  }

  addClass(): void {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe((_result: any) => {
    });

  }
  openDialog() {
    const dialogRef = this.dialog.open(ChoixDialogComponent);

    dialogRef.afterClosed().subscribe((_result: any) => {
    });
    dialogRef.componentInstance.variable1Emise.subscribe((variable1: boolean) => {
      this.variable1Recue = variable1;
    });
    dialogRef.componentInstance.variable2Emise.subscribe((variable2: boolean) => {
      this.variable2Recue = variable2;
    });
  }
  //  ngDoCheck(){
  //   console.log("la valeur de la var",this.variable1Recue)
  //  }
}
