import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageProjectsComponent } from './manage-projects.component';


const routes: Routes = [
  {
    path:'',
    component:ManageProjectsComponent,
  },
  
 
  
  // {
  //   path:'project-list',
  //   component:ProjectListComponent,
  // },
  // {
  //   path:'add-project',
  //   component:AddProjectComponent,
  // },
  // {
  //   path:'edit-project',
  //   component:EditProjectComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageProjectsRoutingModule { }
