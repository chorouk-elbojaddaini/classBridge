import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Classe } from 'src/app/models/classe';
import { User } from 'src/app/models/user';
import { ClasseServiceService } from 'src/app/services/classe-service.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  classeForm: FormGroup;
  classe: Classe;
  user: User;
  userId: any;
  constructor(private formBuilder: FormBuilder, private classeService: ClasseServiceService) {
    this.classeForm = this.formBuilder.group({
      filiere: ['', Validators.required],
      module: ['', Validators.required],
      niveau: ['', Validators.required],
    });
    const authUserJSON: any = localStorage.getItem("authUser");
    const userTemp = JSON.parse(authUserJSON);
    //j'ai fait ca parce que userTemp contient des infos supplementaires
    this.user = new User(userTemp.id
      ,userTemp.firstName
      ,userTemp.lastName
      ,userTemp.email
      ,userTemp.password
      ,userTemp.role
      ,userTemp.enabled);
      //pour avoir juste Id user authentifié
    this.userId = this.user.id;
    this.classe = new Classe("", "", "", "", this.user);
  }
  onSubmit() {
    if (this.classeForm.valid) {
      const formData = this.classeForm.value; // Obtenir les valeurs de classeForm
      this.classe.fieldName = formData.filiere;
      this.classe.module = formData.module;
      this.classe.level = formData.niveau;
     
      this.classeService.addClasse(this.classe).subscribe({
        next:(response)=> console.log("added successfully!"),
        error:(e) => console.log(e)
      })
    } else {
      // Affichez des erreurs de validation
      this.classeForm.markAllAsTouched();
    }
  }

}
