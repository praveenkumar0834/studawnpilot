import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcquittanceCropRoutingModule } from './acquittance-crop-routing.module';
import { AcquittanceCropComponent } from './acquittance-crop.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AcquittanceCropComponent],
  imports: [
    CommonModule,
    AcquittanceCropRoutingModule,
    FormsModule,ReactiveFormsModule
  ]
})
export class AcquittanceCropModule { }
