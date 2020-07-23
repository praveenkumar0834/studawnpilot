import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditCropAwardsComponent } from './edit-crop-awards.component';


const routes: Routes = [
  {
    path:'',
    component:EditCropAwardsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditCropAwardsRoutingModule { }
