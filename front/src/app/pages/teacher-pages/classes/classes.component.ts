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
  selectedClass: any;

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
      console.log("hado classes",this.classes);
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


  
 

  viewClasses() {
    this.choose = true;
  }

  addClass(): void {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe((_result: any) => {
    });

  }
  openDialog(classe:any) {
    const dialogRef = this.dialog.open(ChoixDialogComponent, {
      data: { classe: classe } // Passer classe comme donnée au dialogue
  });
  }
  //  ngDoCheck(){
  //   console.log("la valeur de la var",this.variable1Recue)
  //  }
}
