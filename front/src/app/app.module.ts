import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './share/sidebar/sidebar.component';
import { ProfileDashboardComponent } from './profile-dashboard/profile-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeacherLayoutComponent } from './teacher-layout/teacher-layout.component';
import { BodyTeacherComponent } from './body-dash-teacher/body-dash-teacher.component';
import { MessagesComponent } from './messages/messages.component';
import { ClassesComponent } from './classes/classes.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ProfileDashboardComponent,
    DashboardComponent,
    TeacherLayoutComponent,
    BodyTeacherComponent,
    MessagesComponent,
    ClassesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
