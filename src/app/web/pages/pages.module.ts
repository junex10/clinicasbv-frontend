import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor, ErrorInterceptor } from 'src/app/helpers';

// Internal modules

import { ProfileModule } from './profile/profile.module';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('src/app/web/pages/auth/auth.module').then(mod => mod.AuthModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('src/app/web/pages/profile/profile.module').then(mod => mod.ProfileModule)
  }
];

@NgModule({
  declarations: [
    
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    HttpClientModule,
    SharedModule,

    // Modules
    ProfileModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ]
})
export class PagesModule { }
