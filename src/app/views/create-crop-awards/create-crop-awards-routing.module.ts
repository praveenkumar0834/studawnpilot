import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateCropAwardsComponent } from './create-crop-awards.component';


const routes: Routes = [{
  path:'',
  component:CreateCropAwardsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateCropAwardsRoutingModule { }
