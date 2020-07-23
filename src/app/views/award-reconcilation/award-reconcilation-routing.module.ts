import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AwardReconcilationComponent } from './award-reconcilation.component';


const routes: Routes = [{
  path:'',
  component:AwardReconcilationComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AwardReconcilationRoutingModule { }
