import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Modules
import { DashboardModule } from 'src/app/web/dashboard/dashboard.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('src/app/web/dashboard/dashboard.module').then(mod => mod.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
