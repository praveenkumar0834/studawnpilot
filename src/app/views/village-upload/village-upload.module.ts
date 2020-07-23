import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VillageUploadRoutingModule } from './village-upload-routing.module';
import { VillageUploadComponent } from './village-upload.component';


@NgModule({
  declarations: [VillageUploadComponent],
  imports: [
    CommonModule,
    VillageUploadRoutingModule
  ]
})
export class VillageUploadModule { }
