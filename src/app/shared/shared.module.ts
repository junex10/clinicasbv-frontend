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

import { DataTablesModule } from 'angular-datatables';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    DatatableComponent,
    ModalComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    DataTablesModule,
    NgxPaginationModule,
    FormsModule, 
    ReactiveFormsModule,

    // Material Angular
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
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
    FormsModule, 
    ReactiveFormsModule
  ],
  entryComponents: [
    ModalComponent,
    HeaderComponent,
    DatatableComponent
  ]
})
export class SharedModule { }
