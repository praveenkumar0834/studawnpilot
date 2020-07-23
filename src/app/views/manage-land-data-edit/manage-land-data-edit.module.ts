import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageLandDataEditRoutingModule } from './manage-land-data-edit-routing.module';
import { ManageLandDataEditComponent } from './manage-land-data-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ManageLandDataEditComponent],
  imports: [
    CommonModule,
    ManageLandDataEditRoutingModule,
    FormsModule, ReactiveFormsModule

  ]
})
export class ManageLandDataEditModule { }
