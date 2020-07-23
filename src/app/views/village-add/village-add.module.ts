import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VillageAddRoutingModule } from './village-add-routing.module';
import { VillageAddComponent } from './village-add.component';


@NgModule({
  declarations: [VillageAddComponent],
  imports: [
    CommonModule,
    VillageAddRoutingModule
  ]
})
export class VillageAddModule { }
