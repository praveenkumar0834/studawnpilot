import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditManageAwardsComponent } from './edit-manage-awards.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  {
    path:'',
    component:EditManageAwardsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,FormsModule,ReactiveFormsModule]
})
export class EditManageAwardsRoutingModule { }
