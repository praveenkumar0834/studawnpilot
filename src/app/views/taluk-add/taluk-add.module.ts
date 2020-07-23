import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TalukAddRoutingModule } from './taluk-add-routing.module';
import { TalukAddComponent } from './taluk-add.component';


@NgModule({
  declarations: [TalukAddComponent],
  imports: [
    CommonModule,
    TalukAddRoutingModule
  ]
})
export class TalukAddModule { }
