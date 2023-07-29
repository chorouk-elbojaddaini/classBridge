import { Component, Input } from '@angular/core';

interface SideNavToggle {
  screenWidth:number;
  collapsed:boolean;
}
@Component({
  selector: 'app-teacher-layout',
  templateUrl: './teacher-layout.component.html',
  styleUrls: ['./teacher-layout.component.scss']
})
export class TeacherLayoutComponent {
     isSideNavCollapsed = true;
     screenWidth = 0;
  onToggleSideNav(data:SideNavToggle):void{
      this.screenWidth = data.screenWidth;
      this.isSideNavCollapsed = data.collapsed;
  }
 
}
