import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TalukEditComponent } from './taluk-edit.component';


const routes: Routes = [
  {
    path:'',
    component:TalukEditComponent,
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TalukEditRoutingModule { }
