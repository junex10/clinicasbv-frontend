import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';


// Components
import { ProfileComponent } from './profile.component';
import { ProfileGuard } from 'src/app/guards';
import { DatatableComponent, HeaderComponent } from 'src/app/shared';
import { DataTablesModule } from 'angular-datatables';

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
    ProfileComponent,
    HeaderComponent,
    DatatableComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    DataTablesModule,
    NgxPaginationModule,
  ]
})
export class ProfileModule { }
