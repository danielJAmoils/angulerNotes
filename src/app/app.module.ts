import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import {AuthGuard} from './auth.guard'
import { AuthService } from './auth.service';
import {UserService} from './user.service'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard]
      },
      {
        path: '',
        component: HomeComponent
      }
    ])
  ],
  providers: [AuthService, AuthGuard, UserService],//makes service available to all components 
  bootstrap: [AppComponent]
})
export class AppModule { }
