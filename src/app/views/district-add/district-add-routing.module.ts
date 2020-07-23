import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DistrictComponent } from '../manage-locations/district/district.component';
import { DistrictAddComponent } from './district-add.component';


const routes: Routes = [
  {
    path:'',
    component:DistrictAddComponent,
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DistrictAddRoutingModule { }
