import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TalukUploadRoutingModule } from './taluk-upload-routing.module';
import { TalukUploadComponent } from './taluk-upload.component';


@NgModule({
  declarations: [TalukUploadComponent],
  imports: [
    CommonModule,
    TalukUploadRoutingModule
  ]
})
export class TalukUploadModule { }
