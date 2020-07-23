import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageUsersAddComponent } from './manage-users-add.component';


const routes: Routes = [
  {
    path:'',
      component:ManageUsersAddComponent,  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageUsersAddRoutingModule { }
