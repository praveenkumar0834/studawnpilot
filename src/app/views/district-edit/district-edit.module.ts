import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DistrictEditRoutingModule } from './district-edit-routing.module';
import { DistrictEditComponent } from './district-edit.component';


@NgModule({
  declarations: [DistrictEditComponent],
  imports: [
    CommonModule,
    DistrictEditRoutingModule
  ]
})
export class DistrictEditModule { }
