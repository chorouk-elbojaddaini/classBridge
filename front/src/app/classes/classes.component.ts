import { Component } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ChoixDialogComponent } from '../choix-dialog/choix-dialog.component';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent {
   public choose:boolean = true;
   variable1Recue: boolean = false;
   variable2Recue: boolean = true;
 
   redirectTo(){
    this.variable2Recue= false;
    this.variable1Recue = false;
   }
   recevoirVariable1(variable: boolean) {
     this.variable1Recue = variable;
   }
 
   recevoirVariable2(variable: boolean) {
     this.variable2Recue = variable;
   }
   constructor(private dialog: MatDialog) {}

   viewClasses(){
    this.choose = true;
   }

   addClass(): void {
     const dialogRef = this.dialog.open(DialogComponent);
 
     dialogRef.afterClosed().subscribe((_result: any) => {
     });
    
   }
   openDialog(){
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
