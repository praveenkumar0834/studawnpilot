import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageLandRateAddRoutingModule } from './manage-land-rate-add-routing.module';
import { ManageLandRateAddComponent } from './manage-land-rate-add.component';


@NgModule({
  declarations: [ManageLandRateAddComponent],
  imports: [
    CommonModule,
    ManageLandRateAddRoutingModule
  ]
})
export class ManageLandRateAddModule { }
