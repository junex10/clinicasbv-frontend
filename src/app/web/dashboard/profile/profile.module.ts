import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Modules
import { HTTP_INTERCEPTORS } from '@angular/common/http';

// Interceptors
import { AuthInterceptor } from 'src/app/helpers';

// Components
import { ProfileComponent } from './profile.component';

const routes: Routes = [
  {
    path: 'profile',
    pathMatch: 'full',
    component: ProfileComponent
  }
]

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
 /* providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }]*/
})
export class ProfileModule { }
