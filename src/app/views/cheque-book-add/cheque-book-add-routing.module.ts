import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChequeBookAddComponent } from './cheque-book-add.component';


const routes: Routes = [{
  path:'',
  component:ChequeBookAddComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChequeBookAddRoutingModule { }
