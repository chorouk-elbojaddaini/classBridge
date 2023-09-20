import { Component, Inject, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Classe } from 'src/app/models/classe';
import { Course } from 'src/app/models/course';
import { User } from 'src/app/models/user';
import { CourseService } from 'src/app/services/course.service';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent {
  selectedClass: any; // Déclarez une propriété pour stocker la valeur de selectedClass

 
  courseForm: FormGroup;
  course: Course |any;
  classe:Classe |any;
  user:User | any;
  userId: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private formBuilder: FormBuilder, private courseService: CourseService,private sharedDataService:SharedDataService) {
    this.courseForm = this.formBuilder.group({
      cours: ['', Validators.required],
      description:[''],
      file: ['', Validators.required],
    });
    
    
    this.selectedClass = this.sharedDataService.getSelectedClass();

    this.user = new User(this.selectedClass.teacher.id
      ,this.selectedClass.teacher.firstName
      ,this.selectedClass.teacher.lastName
      ,this.selectedClass.teacher.email
      ,this.selectedClass.teacher.password
      ,this.selectedClass.teacher.role
      ,this.selectedClass.teacher.enabled);

    this.classe = new Classe(
      this.selectedClass.idClass,
      this.selectedClass.fieldName,
      this.selectedClass.module,
      this.selectedClass.level,
      this.selectedClass.classCode,
      this.user
    )
    
     this.course = new Course('','',new Date(),'',this.classe);
    
    // console.log("courseeeee",this.selectedClass.teacher);
    // const authUserJSON: any = localStorage.getItem("authUser");
    // const userTemp = JSON.parse(authUserJSON);
    // //j'ai fait ca parce que userTemp contient des infos supplementaires
    // this.user = new User(userTemp.id
    //   ,userTemp.firstName
    //   ,userTemp.lastName
    //   ,userTemp.email
    //   ,userTemp.password
    //   ,userTemp.role
    //   ,userTemp.enabled);
    //   //pour avoir juste Id user authentifié
    // this.userId = this.user.id;
    // this.course = new Course("", "", "", "", this.user);
    console.log("f add course",this.selectedClass);
  }
  onSubmit() {
   
    if (this.courseForm.valid) {
      const formData = this.courseForm.value; // Obtenir les valeurs de classeForm
      this.course.courseName = formData.cours;
      this.course.description = formData.description;
      this.course.filePath = formData.file;
      console.log("cours", this.course)

      this.courseService.addCourse(this.course).subscribe({
       next:(response)=> console.log("added successfully!"),
         error:(e) => console.log(e)
       })
    } else {
      // Affichez des erreurs de validation
      this.courseForm.markAllAsTouched();
    }
  }

}
