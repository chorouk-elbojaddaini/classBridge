import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { Classe } from 'src/app/models/classe';
import { RegisterRequest } from 'src/app/models/register-request';
import { ClasseServiceService } from 'src/app/services/classe-service.service';
import { CourseService } from 'src/app/services/course.service';
import { StudentService } from 'src/app/services/student.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  averageGrades = [12, 14, 12];
  classLabels = ['Class A', 'Class B', 'Class C'];
  public chart: any;
  user : RegisterRequest | any;
  totalStudents:number = 0;
  totalClasses:number = 0;
  totalCourses:number = 0;
  userId:number |any;
  classes:any;
  constructor(private studentService:StudentService,private classeService:ClasseServiceService,private courseService:CourseService){
    const authUserJSON:any = localStorage.getItem("authUser");
    this.user = JSON.parse(authUserJSON);
    this.userId = localStorage.getItem("id");
    console.log("useerr",this.userId);
     

  }

  ngOnInit(): void {
    this.CalculNumbers(this.userId);
    this.getAllClasses(this.userId);
    this.createChart();
  }


  createChart(){
  
    this.chart = new Chart("MyChart", {
      type: 'bar', 

      data: {
        labels: this.classLabels, 
	       datasets: [
          {
            label: "Classes",
            data: this.averageGrades,
            backgroundColor: '#60CCEC'
          }
        ]
      },
      options: {
        aspectRatio:2
      }
      
    });
  }


  getAllStudents(classCode:any){
    this.studentService.findByCodeClass(classCode).subscribe({
      next:(Response:any) => {
        this.totalStudents = Response.length;
      console.log("for each course ",Response)},
      error:(error) => console.log(error)
    })
  }

CalculNumbers(id:number){
  this.classeService.getAllClasses(id).subscribe({
    next:(r) => {
      this.totalClasses = r.length;
      r.forEach((classe) =>
        this.courseService.getAllCourses(classe.idClass).subscribe({
          next:(response:any) => {
            this.totalCourses += response.length;
          }
        })
        );
        r.forEach((classe) =>
        this.studentService.findByCodeClass(classe.classCode).subscribe({
          next:(response:any) => {
            this.totalStudents += response.length;
            console.log("students",this.totalStudents);
          }
        })
        );
      console.log(r)},
    error:(e) => console.log(e)
  })
}

getAllClasses(userId:number){
  this.classeService.getAllClasses(userId).subscribe({
    next:(response) =>{
        this.classes = response;
    },
    error:(error) => console.log(error)
  })
}
}  
  
