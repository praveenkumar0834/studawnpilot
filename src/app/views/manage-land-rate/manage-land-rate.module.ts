import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageLandRateRoutingModule } from './manage-land-rate-routing.module';
import { ManageLandRateComponent } from './manage-land-rate.component';


@NgModule({
  declarations: [ManageLandRateComponent],
  imports: [
    CommonModule,
    ManageLandRateRoutingModule
  ]
})
export class ManageLandRateModule { }
