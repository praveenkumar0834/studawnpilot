import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ManageTemplateRoutingModule } from './manage-template-routing.module';
import { ManageTemplateComponent } from './manage-template.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [ManageTemplateComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ManageTemplateRoutingModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot()
  ]
})
export class ManageTemplateModule { }
