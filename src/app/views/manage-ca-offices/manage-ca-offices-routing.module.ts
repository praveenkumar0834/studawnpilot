import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageCaOfficesComponent } from './manage-ca-offices.component';


const routes: Routes = [
  {
    path:'',
    component:ManageCaOfficesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageCaOfficesRoutingModule { }
