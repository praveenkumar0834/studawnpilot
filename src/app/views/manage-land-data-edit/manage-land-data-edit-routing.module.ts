import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageLandDataEditComponent } from './manage-land-data-edit.component';


const routes: Routes = [
  {
    path: '',
    component: ManageLandDataEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageLandDataEditRoutingModule { }
