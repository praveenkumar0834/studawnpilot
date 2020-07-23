import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageLandRateComponent } from './manage-land-rate.component';


const routes: Routes = [{
  path:'',
  component:ManageLandRateComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageLandRateRoutingModule { }
