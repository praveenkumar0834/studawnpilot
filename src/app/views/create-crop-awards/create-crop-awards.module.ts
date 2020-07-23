import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateCropAwardsRoutingModule } from './create-crop-awards-routing.module';
import { CreateCropAwardsComponent } from './create-crop-awards.component';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [CreateCropAwardsComponent],
  imports: [
    CommonModule,
    CreateCropAwardsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    NgbModule,
    NgMultiSelectDropDownModule.forRoot()

  ]
})
export class CreateCropAwardsModule { }
