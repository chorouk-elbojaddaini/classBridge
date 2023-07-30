import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-body-dash-teacher',
  templateUrl: './body-dash-teacher.component.html',
  styleUrls: ['./body-dash-teacher.component.scss']
})
export class BodyTeacherComponent {
  @Input() collapsed: boolean | undefined;
  @Input() screenWidth = 0;

  ngOnInit() {
    console.log(this.collapsed);

  }
  getBodyClass(): string {
    let styleCLass = '';
    if (!this.collapsed && this.screenWidth > 768) {
      styleCLass = 'small-screen';

    }
    else if (!this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0) {
      styleCLass = 'small-screen';
    }
    else if (this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0) {
      styleCLass = 'small-screen';
    }
    else if (this.collapsed && this.screenWidth > 768) {
      styleCLass = 'body-md';

    }
    return styleCLass;

  }
}
