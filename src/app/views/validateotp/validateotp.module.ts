import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidateotpRoutingModule } from './validateotp-routing.module';
import { ValidateotpComponent } from './validateotp.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'


@NgModule({
  declarations: [ValidateotpComponent],
  imports: [
    CommonModule,
    ValidateotpRoutingModule,
    FormsModule,ReactiveFormsModule
  ]
})
export class ValidateotpModule { }
