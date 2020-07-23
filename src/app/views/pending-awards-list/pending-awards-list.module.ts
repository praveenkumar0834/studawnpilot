import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PendingAwardsListRoutingModule } from './pending-awards-list-routing.module';
import { PendingAwardsListComponent } from './pending-awards-list.component';


@NgModule({
  declarations: [PendingAwardsListComponent],
  imports: [
    CommonModule,
    PendingAwardsListRoutingModule
  ]
})
export class PendingAwardsListModule { }
