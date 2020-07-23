import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ValidateotpComponent } from './validateotp.component';


const routes: Routes = [{
  path:'',
  component:ValidateotpComponent
}
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ValidateotpRoutingModule { }
