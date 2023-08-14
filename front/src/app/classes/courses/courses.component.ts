import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  showOptions: boolean = false;
  numbers = [1,2,3,4,5,6,7];
  toggleOptions() {
    this.showOptions = !this.showOptions;
  }

}
