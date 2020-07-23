import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageLandDataAddRoutingModule } from './manage-land-data-add-routing.module';
import { ManageLandDataAddComponent } from './manage-land-data-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MultiSelectModule} from 'primeng/multiselect';
import { NgxSpinnerModule } from "ngx-spinner";
@NgModule({
  declarations: [ManageLandDataAddComponent],
  imports: [
    CommonModule,
    ManageLandDataAddRoutingModule,
    FormsModule, ReactiveFormsModule,
    MultiSelectModule,
    NgxSpinnerModule
  ]
})
export class ManageLandDataAddModule { }
