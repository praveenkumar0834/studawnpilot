import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DropdownModule} from 'primeng/dropdown';
import { ManageUsersAddRoutingModule } from './manage-users-add-routing.module';
import { ManageUsersAddComponent } from './manage-users-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ToastModule} from 'primeng/toast';
import {MultiSelectModule} from 'primeng/multiselect';
import { NgxSpinnerModule } from "ngx-spinner";
@NgModule({
  declarations: [ManageUsersAddComponent],
  imports: [
    CommonModule,
    ManageUsersAddRoutingModule,
    FormsModule,ReactiveFormsModule,
    MultiSelectModule,
    DropdownModule,
    ToastModule,
    NgxSpinnerModule
  ]
})
export class ManageUsersAddModule { }
