import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MyDatePickerModule } from 'mydatepicker';
import { ProjectAddRoutingModule } from './project-add-routing.module';
import { ProjectAddComponent } from './project-add.component';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {MultiSelectModule} from 'primeng/multiselect';
import {ToastModule} from 'primeng/toast';

import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [ProjectAddComponent],
  imports: [
    CommonModule,
    ProjectAddRoutingModule,
    FormsModule,ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    MultiSelectModule,
    ToastModule,
    MyDatePickerModule,
    NgxSpinnerModule

  ],
  providers: [DatePipe]
})
export class ProjectAddModule { }
