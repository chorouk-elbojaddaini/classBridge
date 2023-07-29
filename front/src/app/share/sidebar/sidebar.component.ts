import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { navbarData } from './nav-data';
 
interface SideNavToggle {
  screenWidth:number;
  collapsed:boolean;
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{

  @Output() onToggleSideNav : EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = true;
  screenWidth = 0;
  navData = navbarData;
  
  @HostListener('window:resize',['$event'])
  onResize(event:any){
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 768){
      this.collapsed = false;
      this.onToggleSideNav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth})

    }
    if(this.screenWidth > 768){
      this.collapsed = true;
      this.onToggleSideNav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth})

    }
  }
  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }
  toggleCollapse():void{
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth})
  }
  closeSidenav():void {
   this.collapsed = false;
   this.onToggleSideNav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth})

  }
  
}
