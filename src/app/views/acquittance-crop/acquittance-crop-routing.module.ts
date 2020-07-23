import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcquittanceCropComponent } from './acquittance-crop.component';


const routes: Routes = [
  {
    path:'',
    component:AcquittanceCropComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcquittanceCropRoutingModule { }
