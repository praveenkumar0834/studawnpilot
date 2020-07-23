import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageLandDataComponent } from './manage-land-data.component';


const routes: Routes = [{
  path:'',
  component:ManageLandDataComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageLandDataRoutingModule { }
