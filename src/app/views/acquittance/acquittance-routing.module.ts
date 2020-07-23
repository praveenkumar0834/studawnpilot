import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcquittanceComponent } from './acquittance.component';


const routes: Routes = [
  {
    path:'',
    component:AcquittanceComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcquittanceRoutingModule { }
