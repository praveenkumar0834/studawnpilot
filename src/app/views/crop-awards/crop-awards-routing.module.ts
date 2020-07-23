import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CropAwardsComponent } from './crop-awards.component';


const routes: Routes = [
  {
    path:'',
    component:CropAwardsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CropAwardsRoutingModule { }
