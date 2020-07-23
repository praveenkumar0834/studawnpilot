import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageLocationsEditRoutingModule } from './manage-locations-edit-routing.module';
import { ManageLocationsEditComponent } from './manage-locations-edit.component';


@NgModule({
  declarations: [ManageLocationsEditComponent],
  imports: [
    CommonModule,
    ManageLocationsEditRoutingModule
  ]
})
export class ManageLocationsEditModule { }
