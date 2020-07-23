import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageChequeBookRoutingModule } from './manage-cheque-book-routing.module';
import { ManageChequeBookComponent } from './manage-cheque-book.component';

import {PaginatorModule} from 'primeng/paginator';
import { NgxSpinnerModule } from "ngx-spinner";
@NgModule({
  declarations: [ManageChequeBookComponent],
  imports: [
    CommonModule,
    ManageChequeBookRoutingModule,
    PaginatorModule,NgxSpinnerModule
  ]
})
export class ManageChequeBookModule { }
