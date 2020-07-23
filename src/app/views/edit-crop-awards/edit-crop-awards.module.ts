import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditCropAwardsRoutingModule } from './edit-crop-awards-routing.module';
import { EditCropAwardsComponent } from './edit-crop-awards.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [EditCropAwardsComponent],
  imports: [
    CommonModule,
    EditCropAwardsRoutingModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    FormsModule, ReactiveFormsModule,
    NgbModule

  ]
})
export class EditCropAwardsModule { }
