import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CropAwardsRoutingModule } from './crop-awards-routing.module';
import { CropAwardsComponent } from './crop-awards.component';


@NgModule({
  declarations: [CropAwardsComponent],
  imports: [
    CommonModule,
    CropAwardsRoutingModule
  ]
})
export class CropAwardsModule { }
