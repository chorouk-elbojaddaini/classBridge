import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './share/sidebar/sidebar.component';
import { ProfileDashboardComponent } from './pages/teacher-pages/dashboard/profile-dashboard/profile-dashboard.component';
import { DashboardComponent } from './pages/teacher-pages/dashboard/dashboard.component';
import { TeacherLayoutComponent } from './components/teacher-layout/teacher-layout.component';
import { BodyTeacherComponent } from './components/teacher-layout/body-dash-teacher/body-dash-teacher.component';
import { MessagesComponent } from './pages/teacher-pages/messages/messages.component';
import { ClassesComponent } from './pages/teacher-pages/classes/classes.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './pages/teacher-pages/dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ChoixDialogComponent } from './pages/teacher-pages/choix-dialog/choix-dialog.component';
import { StudentsComponent } from './pages/teacher-pages/classes/students/students.component';
import { CoursesComponent } from './pages/teacher-pages/classes/courses/courses.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { StudentDialogComponent } from './pages/teacher-pages/classes/students/student-dialog/student-dialog.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ItemListComponent } from './pages/teacher-pages/classes/courses/item-list/item-list.component';
// import { SelectedItemDetailsComponent } from './classes/courses/selected-item-details/selected-item-details.component';
import { ProgrammeComponent } from './pages/teacher-pages/programme/programme.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { ProfileComponent } from './pages/teacher-pages/profile/profile.component';

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
    ItemListComponent,
    // SelectedItemDetailsComponent,
    ProgrammeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CanvasJSAngularChartsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatIconModule,
    MatSelectModule,
    MatPaginatorModule,
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
