import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/teacher-pages/dashboard/dashboard.component';
import { TeacherLayoutComponent } from './components/teacher-layout/teacher-layout.component';
import { ClassesComponent } from './pages/teacher-pages/classes/classes.component';
import { MessagesComponent } from './pages/teacher-pages/messages/messages.component';
import { ProgrammeComponent } from './pages/teacher-pages/programme/programme.component';
import { ProfileComponent } from './pages/teacher-pages/profile/profile.component';
import { BodyTeacherComponent } from './components/teacher-layout/body-dash-teacher/body-dash-teacher.component';
import { RegisterTeacherComponent } from './pages/auth/register-teacher/register-teacher.component';
import { RegisterStudentComponent } from './pages/auth/register-student/register-student.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthComponent } from './pages/auth/auth.component';
import { LoginTeacherComponent } from './pages/auth/login-teacher/login-teacher.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'auth/registerStudent', component: RegisterStudentComponent },
  { path: 'auth/registerTeacher', component: RegisterTeacherComponent },
  { path: 'auth/loginTeacher', component: LoginTeacherComponent },

  {
    path: 'teacherDashboard', component: TeacherLayoutComponent,
    children: [
      // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'classes', component: ClassesComponent },
      { path: 'messages', component: MessagesComponent },
      { path: 'schedule', component: ProgrammeComponent },
      { path: 'profile', component: ProfileComponent },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
