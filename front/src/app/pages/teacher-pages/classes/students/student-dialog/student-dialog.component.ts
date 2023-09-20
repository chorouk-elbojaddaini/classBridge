import { Component } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styleUrls: ['./student-dialog.component.scss']
})
export class StudentDialogComponent {

  selectedClass:any;
 class:any;
  constructor(private sharedDataservice:SharedDataService){
     this.class = localStorage.getItem('idClass');
     console.log("classss ddd",this.class);
  }

}
