import { Component } from '@angular/core';

@Component({
  selector: 'app-notes-student',
  templateUrl: './notes-student.component.html',
  styleUrls: ['./notes-student.component.scss']
})
export class NotesStudentComponent {
  tableauDeDonnees = [
    { nomClasse: 'Classe A', nomProfesseur: 'Professeur 1', note: 18 },
    { nomClasse: 'Classe B', nomProfesseur: 'Professeur 2', note: 15 },
    { nomClasse: 'Classe C', nomProfesseur: 'Professeur 3', note: 20 },
  ];
}
