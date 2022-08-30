import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  DatatableComponent,
  HeaderComponent,
  ModalComponent
} from 'src/app/shared';

// External modules

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { DataTablesModule } from 'angular-datatables';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    HeaderComponent,
    DatatableComponent,
    ModalComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    
    // Material Angular
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatDatepickerModule,

    DataTablesModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule
  ],
  exports: [
    HeaderComponent,
    DatatableComponent,
    ModalComponent,

    // Modules
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule
  ],
  entryComponents: [
    ModalComponent,
    HeaderComponent,
    DatatableComponent
  ]
})
export class SharedModule { }
