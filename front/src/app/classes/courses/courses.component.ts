import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { SelectedItemService } from 'src/app/services/selected-item-service.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  selected:boolean = false;
  constructor(private selectedItemService:SelectedItemService){
    
  }

  ngDoCheck(){
    this.selected = this.selectedItemService.selected;
    console.log("hadi boolean",this.selected);
    console.log("hadi d service",this.selectedItemService.selected);
  }


}
