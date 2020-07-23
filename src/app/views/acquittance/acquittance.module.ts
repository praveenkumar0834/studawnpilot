import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcquittanceRoutingModule } from './acquittance-routing.module';
import { AcquittanceComponent } from './acquittance.component';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';

@NgModule({
  declarations: [AcquittanceComponent],
  imports: [
    CommonModule,
    AcquittanceRoutingModule,
    FormsModule,ReactiveFormsModule
  ]
})
export class AcquittanceModule { }
