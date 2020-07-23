import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UndisbursedBeneficiaryListRoutingModule } from './undisbursed-beneficiary-list-routing.module';
import { UndisbursedBeneficiaryListComponent } from './undisbursed-beneficiary-list.component';


@NgModule({
  declarations: [UndisbursedBeneficiaryListComponent],
  imports: [
    CommonModule,
    UndisbursedBeneficiaryListRoutingModule
  ]
})
export class UndisbursedBeneficiaryListModule { }
