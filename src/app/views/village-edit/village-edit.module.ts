import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VillageEditRoutingModule } from './village-edit-routing.module';
import { VillageEditComponent } from './village-edit.component';


@NgModule({
  declarations: [VillageEditComponent],
  imports: [
    CommonModule,
    VillageEditRoutingModule
  ]
})
export class VillageEditModule { }
