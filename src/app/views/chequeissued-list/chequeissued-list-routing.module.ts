import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChequeissuedListComponent } from './chequeissued-list.component';


const routes: Routes = [{
  path:'',
  component:ChequeissuedListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChequeissuedListRoutingModule { }
