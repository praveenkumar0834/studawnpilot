import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageCaOfficesRoutingModule } from './manage-ca-offices-routing.module';
import { ManageCaOfficesComponent } from './manage-ca-offices.component';
import { NgxPaginationModule } from 'ngx-pagination';
import {PaginatorModule} from 'primeng/paginator';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [ManageCaOfficesComponent],
  imports: [
    CommonModule,
    ManageCaOfficesRoutingModule,
    NgxPaginationModule,
    PaginatorModule,
    NgxSpinnerModule,

  ]
})
export class ManageCaOfficesModule { }
