import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisbursementDetailsRoutingModule } from './disbursement-details-routing.module';
import { DisbursementDetailsComponent } from './disbursement-details.component';


@NgModule({
  declarations: [DisbursementDetailsComponent],
  imports: [
    CommonModule,
    DisbursementDetailsRoutingModule
  ]
})
export class DisbursementDetailsModule { }
