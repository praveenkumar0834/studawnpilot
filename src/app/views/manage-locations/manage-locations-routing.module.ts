import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageLocationsComponent } from './manage-locations.component';


import { TalukComponent } from './taluk/taluk.component';
import { VillageComponent } from './village/village.component';
import { DistrictComponent } from './district/district.component';




const routes: Routes = [
  {
    path:'',
    component:ManageLocationsComponent,
  },
  
 
  
  {
    path:'taluk',
    component:TalukComponent,
  },
  {
    path:'district',
    component:DistrictComponent,
  },
  {
    path:'village',
    component:VillageComponent,
  },

  // {
  //   path: '',
  //   component:ManageLocationsComponent,
  //   children: [
  //     {
  //       path: 'taluk',
  //       component: TalukComponent,
       
  //     },
  //     {
  //       path: 'district',
  //       component: DistrictComponent,
       
  //     },
  //     {
  //       path: 'village',
  //       component: VillageComponent,
        
  //     },
      
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageLocationsRoutingModule { }
