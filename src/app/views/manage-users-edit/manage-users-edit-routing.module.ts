import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageUsersEditComponent } from './manage-users-edit.component';


const routes: Routes = [
  {
    
      path:'',
      component:ManageUsersEditComponent,  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageUsersEditRoutingModule { }
