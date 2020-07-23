import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChequeissuedListRoutingModule } from './chequeissued-list-routing.module';
import { ChequeissuedListComponent } from './chequeissued-list.component';


@NgModule({
  declarations: [ChequeissuedListComponent],
  imports: [
    CommonModule,
    ChequeissuedListRoutingModule
  ]
})
export class ChequeissuedListModule { }
