import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageUsersEditRoutingModule } from './manage-users-edit-routing.module';
import { ManageUsersEditComponent } from './manage-users-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [ManageUsersEditComponent],
  imports: [
    CommonModule,
    ManageUsersEditRoutingModule,
    FormsModule, ReactiveFormsModule,
    NgxPaginationModule

  ]
})
export class ManageUsersEditModule { }
