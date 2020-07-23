import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageAwardsComponent } from './manage-awards.component';


const routes: Routes = [
  {
    path:'',
    component:ManageAwardsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageAwardsRoutingModule { }
