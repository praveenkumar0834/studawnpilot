import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditManageCaOfficesComponent } from './edit-manage-ca-offices.component';


const routes: Routes = [
  {
    path:'',
    component:EditManageCaOfficesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditManageCaOfficesRoutingModule { }
