import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageLandDataRoutingModule } from './manage-land-data-routing.module';
import { ManageLandDataComponent } from './manage-land-data.component';
import { NgxSpinnerModule } from "ngx-spinner";
import {PaginatorModule} from 'primeng/paginator';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';

@NgModule({
  declarations: [ManageLandDataComponent],
  imports: [
    CommonModule,
    ManageLandDataRoutingModule,
    NgxSpinnerModule,
    PaginatorModule,
    FormsModule,ReactiveFormsModule
  ]
})
export class ManageLandDataModule { }
