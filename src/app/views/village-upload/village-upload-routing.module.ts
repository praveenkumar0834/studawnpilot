import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VillageUploadComponent } from './village-upload.component';


const routes: Routes = [
  {
    path:'',
    component:VillageUploadComponent,
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VillageUploadRoutingModule { }
