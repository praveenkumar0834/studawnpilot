import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DistrictAddRoutingModule } from './district-add-routing.module';
import { DistrictAddComponent } from './district-add.component';


@NgModule({
  declarations: [DistrictAddComponent],
  imports: [
    CommonModule,
    DistrictAddRoutingModule
  ]
})
export class DistrictAddModule { }
