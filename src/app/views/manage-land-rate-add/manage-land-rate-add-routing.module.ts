import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageLandRateAddComponent } from './manage-land-rate-add.component';


const routes: Routes = [{
  path:'',
  component:ManageLandRateAddComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageLandRateAddRoutingModule { }
