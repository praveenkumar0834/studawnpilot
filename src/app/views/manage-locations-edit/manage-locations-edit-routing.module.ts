import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageLocationsEditComponent } from './manage-locations-edit.component';


const routes: Routes = [{
  path:'',
    component:ManageLocationsEditComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageLocationsEditRoutingModule { }
