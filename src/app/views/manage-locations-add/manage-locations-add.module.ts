import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageLocationsAddRoutingModule } from './manage-locations-add-routing.module';
import { ManageLocationsAddComponent } from './manage-locations-add.component';


@NgModule({
  declarations: [ManageLocationsAddComponent],
  imports: [
    CommonModule,
    ManageLocationsAddRoutingModule
  ]
})
export class ManageLocationsAddModule { }
