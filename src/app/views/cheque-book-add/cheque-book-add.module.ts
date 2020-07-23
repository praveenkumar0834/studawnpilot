import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChequeBookAddRoutingModule } from './cheque-book-add-routing.module';
import { ChequeBookAddComponent } from './cheque-book-add.component';
import {MultiSelectModule} from 'primeng/multiselect';
import { NgxSpinnerModule } from "ngx-spinner";
@NgModule({
  declarations: [ChequeBookAddComponent],
  imports: [
    CommonModule,
    ChequeBookAddRoutingModule,
    FormsModule, ReactiveFormsModule ,
    MultiSelectModule,
    NgxSpinnerModule
  ]
})
export class ChequeBookAddModule { }
