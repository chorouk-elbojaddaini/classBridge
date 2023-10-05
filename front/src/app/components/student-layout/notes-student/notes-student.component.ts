import { Component } from '@angular/core';
import { ClasseServiceService } from 'src/app/services/classe-service.service';
import { StudentService } from 'src/app/services/student.service';

export interface Notes{
  className:"",
  teacher:"",
  note:""
}
@Component({
  selector: 'app-notes-student',
  templateUrl: './notes-student.component.html',
  styleUrls: ['./notes-student.component.scss']
})
export class NotesStudentComponent {
  tableauDeDonnees = [
    { nomClasse: 'Classe A', nomProfesseur: 'Professeur 1', note: 10 },
    { nomClasse: 'Classe B', nomProfesseur: 'Professeur 2', note: 15 },
    { nomClasse: 'Classe C', nomProfesseur: 'Professeur 3', note: 20 },
  ];
  dataNotes : Notes[] = [];

  constructor(private etudiantService:StudentService,private classeService:ClasseServiceService){

  }
}
