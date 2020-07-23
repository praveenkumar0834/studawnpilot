import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageLandRateEditComponent } from './manage-land-rate-edit.component';


const routes: Routes = [{
  path:'',
  component:ManageLandRateEditComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageLandRateEditRoutingModule { }
