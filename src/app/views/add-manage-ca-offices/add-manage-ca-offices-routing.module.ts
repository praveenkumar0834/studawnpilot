import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddManageCaOfficesComponent } from './add-manage-ca-offices.component';


const routes: Routes = [
  {
    path:'',
    component:AddManageCaOfficesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddManageCaOfficesRoutingModule { }
