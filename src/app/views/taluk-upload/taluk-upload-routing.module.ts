import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TalukUploadComponent } from './taluk-upload.component';


const routes: Routes = [
  {
    path:'',
    component:TalukUploadComponent,
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TalukUploadRoutingModule { }
