import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PendingAwardsListComponent } from './pending-awards-list.component';


const routes: Routes = [{
  path:'',
  component:PendingAwardsListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PendingAwardsListRoutingModule { }
