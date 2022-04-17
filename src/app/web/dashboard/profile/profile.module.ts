import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Components
import { ProfileComponent } from './profile.component';
import { ProfileGuard } from 'src/app/guards';

const routes: Routes = [
  {
    path: 'profile',
    pathMatch: 'full',
    component: ProfileComponent,
    canActivate: [ProfileGuard]
  }
]

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class ProfileModule { }
