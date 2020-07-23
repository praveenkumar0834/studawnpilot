import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { EditManageCaOfficesRoutingModule } from './edit-manage-ca-offices-routing.module';
import { EditManageCaOfficesComponent } from './edit-manage-ca-offices.component';


@NgModule({
  declarations: [EditManageCaOfficesComponent],
  imports: [
    CommonModule,
    EditManageCaOfficesRoutingModule,
    FormsModule,ReactiveFormsModule
  ]
})
export class EditManageCaOfficesModule { }
