import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VillageAddComponent } from './village-add.component';


const routes: Routes = [
  {
    path:'',
    component:VillageAddComponent,
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VillageAddRoutingModule { }
