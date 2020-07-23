import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageLandDataAddComponent } from './manage-land-data-add.component';


const routes: Routes = [{
  path:'',
  component:ManageLandDataAddComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageLandDataAddRoutingModule { }
