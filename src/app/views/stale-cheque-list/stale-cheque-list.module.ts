import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaleChequeListRoutingModule } from './stale-cheque-list-routing.module';
import { StaleChequeListComponent } from './stale-cheque-list.component';


@NgModule({
  declarations: [StaleChequeListComponent],
  imports: [
    CommonModule,
    StaleChequeListRoutingModule
  ]
})
export class StaleChequeListModule { }
