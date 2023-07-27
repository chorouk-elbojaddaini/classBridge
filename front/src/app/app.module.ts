import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './share/sidebar/sidebar.component';
import { ProfileDashboardComponent } from './profile-dashboard/profile-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ProfileDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
