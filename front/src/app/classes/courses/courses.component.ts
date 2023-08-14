import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  numbers = [1,2,3,4,5,6,7];
  totalItems :number|undefined;
  pageSize = 6; 
  currentPage = 0; 
  constructor(){
    this.totalItems = this.numbers.length;
  }
  handlePageChange(event: PageEvent) {
    this.currentPage = event.pageIndex;
    
  }


}
