import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageLandRateEditRoutingModule } from './manage-land-rate-edit-routing.module';
import { ManageLandRateEditComponent } from './manage-land-rate-edit.component';


@NgModule({
  declarations: [ManageLandRateEditComponent],
  imports: [
    CommonModule,
    ManageLandRateEditRoutingModule
  ]
})
export class ManageLandRateEditModule { }
