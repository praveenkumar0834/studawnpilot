import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DistrictEditComponent } from './district-edit.component';


const routes: Routes = [
  {
    path:'',
    component:DistrictEditComponent,
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DistrictEditRoutingModule { }
