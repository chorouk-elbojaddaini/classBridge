import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  sidebar_close: boolean = false;
  menuOpened: boolean = false;
  
  Close() {
    this.sidebar_close = !this.sidebar_close;
  }
  openMenu() {
    this.menuOpened = !this.menuOpened;
  }
}
