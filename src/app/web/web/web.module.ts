import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    AboutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class WebModule { }
