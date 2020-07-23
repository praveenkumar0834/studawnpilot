import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditManageAwardsRoutingModule } from './edit-manage-awards-routing.module';
import { EditManageAwardsComponent } from './edit-manage-awards.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [EditManageAwardsComponent],
  imports: [
    CommonModule,
    EditManageAwardsRoutingModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    FormsModule,ReactiveFormsModule,
    NgbModule
  ]
})
export class EditManageAwardsModule { }
