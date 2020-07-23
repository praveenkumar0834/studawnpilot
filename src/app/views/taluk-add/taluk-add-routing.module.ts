import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TalukAddComponent } from './taluk-add.component';


const routes: Routes = [
  {
    path:'',
    component:TalukAddComponent,
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TalukAddRoutingModule { }
