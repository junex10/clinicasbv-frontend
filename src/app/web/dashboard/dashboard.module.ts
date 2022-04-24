import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor, ErrorInterceptor } from 'src/app/helpers';
import { NgOtpInputModule } from 'ng-otp-input';

// External modules

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';

// Internal modules

import { ProfileModule } from './profile/profile.module';

// Guards
import { LoginGuard } from 'src/app/guards';

// Components
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VerifyComponent } from './verify/verify.component';
import { RecoverComponent } from './recover/recover.component';
import { ForgotAccountComponent } from './forgot-account/forgot-account.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'verify/:token',
    component: VerifyComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'forgot-account',
    component: ForgotAccountComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(mod => mod.ProfileModule)
  }
];

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    VerifyComponent,
    RecoverComponent,
    ForgotAccountComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    HttpClientModule,
    NgOtpInputModule,

    // Forms
    FormsModule, 
    ReactiveFormsModule,

    // Material Angular
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,

    // Modules
    ProfileModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ]
})
export class DashboardModule { }
