import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateManageAwardsComponent } from './create-manage-awards.component';


const routes: Routes = [
  {
    path:'',
    component:CreateManageAwardsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateManageAwardsRoutingModule { }
