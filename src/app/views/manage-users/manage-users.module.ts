import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageUsersRoutingModule } from './manage-users-routing.module';
import { ManageUsersComponent } from './manage-users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import {PaginatorModule} from 'primeng/paginator';
import { NgxSpinnerModule } from "ngx-spinner";
@NgModule({
  declarations: [ManageUsersComponent],
  imports: [
    CommonModule,
    ManageUsersRoutingModule,
    FormsModule, ReactiveFormsModule,
    NgxPaginationModule,
    PaginatorModule,
    NgxSpinnerModule

  ]
})
export class ManageUsersModule { }
