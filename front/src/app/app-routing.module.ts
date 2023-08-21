import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/teacher-pages/dashboard/dashboard.component';
import { TeacherLayoutComponent } from './components/teacher-layout/teacher-layout.component';
import { ClassesComponent } from './pages/teacher-pages/classes/classes.component';
import { MessagesComponent } from './pages/teacher-pages/messages/messages.component';
import { ProgrammeComponent } from './pages/teacher-pages/programme/programme.component';
import { ProfileComponent } from './pages/teacher-pages/profile/profile.component';
import { BodyTeacherComponent } from './components/teacher-layout/body-dash-teacher/body-dash-teacher.component';

const routes: Routes = [
  {
    path: 'teacher',
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'classes', component: ClassesComponent },
      { path: 'messages', component: MessagesComponent },
      { path: 'schedule', component: ProgrammeComponent },
      { path: 'profile', component: ProfileComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
