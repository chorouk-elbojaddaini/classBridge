import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-choix-dialog',
  templateUrl: './choix-dialog.component.html',
  styleUrls: ['./choix-dialog.component.scss']
})
export class ChoixDialogComponent {
  @Output() variable1Emise: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() variable2Emise: EventEmitter<boolean> = new EventEmitter<boolean>();
  selectedClass:any;
  variable1: boolean = false;
  variable2: boolean = false;
  constructor(private router:Router,@Inject(MAT_DIALOG_DATA) public data: any,private sharedDataService:SharedDataService){
    this.selectedClass = data.classe;
    this.sharedDataService.setSelectedClass(data.classe);
    localStorage.setItem('classCode',data.classe.classCode);
  }
  afficherEtudiants() {
    this.router.navigate(['teacherDashboard/students']);
  }

  afficherCours() {
    this.router.navigate(['teacherDashboard/courses']);
    // this.variable2 = true;
    // this.variable2Emise.emit(this.variable2);

  }

}
