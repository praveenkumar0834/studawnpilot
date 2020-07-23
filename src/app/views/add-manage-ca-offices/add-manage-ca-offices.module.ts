import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { AddManageCaOfficesRoutingModule } from './add-manage-ca-offices-routing.module';
import { AddManageCaOfficesComponent } from './add-manage-ca-offices.component';
import {DropdownModule} from 'primeng/dropdown';
import {ToastModule} from 'primeng/toast';
import { NgxSpinnerModule } from "ngx-spinner";
import {MultiSelectModule} from 'primeng/multiselect';

@NgModule({
  declarations: [AddManageCaOfficesComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AddManageCaOfficesRoutingModule,
    DropdownModule,
    ToastModule,
    NgxSpinnerModule,
    MultiSelectModule
  ]
})
export class AddManageCaOfficesModule { }
