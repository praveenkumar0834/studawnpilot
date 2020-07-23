import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VillageEditComponent } from './village-edit.component';


const routes: Routes = [
  {
    path:'',
    component:VillageEditComponent,
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VillageEditRoutingModule { }
