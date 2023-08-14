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
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ChoixDialogComponent } from './choix-dialog/choix-dialog.component';
import { StudentsComponent } from './classes/students/students.component';
import { CoursesComponent } from './classes/courses/courses.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { StudentDialogComponent } from './classes/students/student-dialog/student-dialog.component';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ProfileDashboardComponent,
    DashboardComponent,
    TeacherLayoutComponent,
    BodyTeacherComponent,
    MessagesComponent,
    ClassesComponent,
    DialogComponent,
    ChoixDialogComponent,
    StudentsComponent,
    CoursesComponent,
    StudentDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CanvasJSAngularChartsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatIconModule,
    MatSelectModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
