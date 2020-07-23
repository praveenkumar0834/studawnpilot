import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AwardReconcilationRoutingModule } from './award-reconcilation-routing.module';
import { AwardReconcilationComponent } from './award-reconcilation.component';


@NgModule({
  declarations: [AwardReconcilationComponent],
  imports: [
    CommonModule,
    AwardReconcilationRoutingModule
  ]
})
export class AwardReconcilationModule { }
