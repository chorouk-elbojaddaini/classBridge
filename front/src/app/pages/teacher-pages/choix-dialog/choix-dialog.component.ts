import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-choix-dialog',
  templateUrl: './choix-dialog.component.html',
  styleUrls: ['./choix-dialog.component.scss']
})
export class ChoixDialogComponent {
  @Output() variable1Emise: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() variable2Emise: EventEmitter<boolean> = new EventEmitter<boolean>();

  variable1: boolean = false;
  variable2: boolean = false;

  afficherEtudiants() {
    this.variable1 = true;
    console.log("clicked")
    this.variable1Emise.emit(this.variable1);
  }

  afficherCours() {
    this.variable2 = true;
    this.variable2Emise.emit(this.variable2);
  }

}
