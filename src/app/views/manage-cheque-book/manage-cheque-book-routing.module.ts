import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageChequeBookComponent } from './manage-cheque-book.component';


const routes: Routes = [
  {
    path:'',
    component:ManageChequeBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageChequeBookRoutingModule { }
