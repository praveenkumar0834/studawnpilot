import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { CreateManageAwardsRoutingModule } from './create-manage-awards-routing.module';
import { CreateManageAwardsComponent } from './create-manage-awards.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [CreateManageAwardsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CreateManageAwardsRoutingModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot(),
    NgbModule

  ]
})
export class CreateManageAwardsModule { }
