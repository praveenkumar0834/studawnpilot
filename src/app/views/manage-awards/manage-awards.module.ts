import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageAwardsRoutingModule } from './manage-awards-routing.module';
import { ManageAwardsComponent } from './manage-awards.component';


@NgModule({
  declarations: [ManageAwardsComponent],
  imports: [
    CommonModule,
    ManageAwardsRoutingModule
  ]
})
export class ManageAwardsModule { }
