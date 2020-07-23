import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TalukEditRoutingModule } from './taluk-edit-routing.module';
import { TalukEditComponent } from './taluk-edit.component';


@NgModule({
  declarations: [TalukEditComponent],
  imports: [
    CommonModule,
    TalukEditRoutingModule
  ]
})
export class TalukEditModule { }
