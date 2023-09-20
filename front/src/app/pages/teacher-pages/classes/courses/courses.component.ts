import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { SelectedItemService } from 'src/app/services/selected-item-service.service';
import { AddCourseComponent } from './add-course/add-course.component';
import { Router } from '@angular/router';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  selected:boolean = false;
  selectedClass: any;

  
  constructor(private dialog: MatDialog,private sharedDataService: SharedDataService,private selectedItemService:SelectedItemService,private router:Router){
    this.selectedClass = this.sharedDataService.getSelectedClass(); // Récupérez la valeur depuis le service
     console.log("claaaassse",this.selectedClass);
  }

  ngOnInit(){
  }

  ngDoCheck(){
    this.selected = this.selectedItemService.selected;
  }

  openDialog() {
    const dialogRef =this.dialog.open(AddCourseComponent);

 
    
  
  }
  redirectTo() {
  
  
  }


}
