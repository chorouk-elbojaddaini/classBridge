import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeacherLayoutComponent } from './teacher-layout/teacher-layout.component';
import { ClassesComponent } from './classes/classes.component';
import { MessagesComponent } from './messages/messages.component';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
   {path:'classes',component:ClassesComponent},
   {path:'messages',component:MessagesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
