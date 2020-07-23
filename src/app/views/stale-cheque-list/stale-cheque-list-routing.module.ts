import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaleChequeListComponent } from './stale-cheque-list.component';


const routes: Routes = [{
  path:'',
  component:StaleChequeListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaleChequeListRoutingModule { }
