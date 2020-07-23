import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageProjectsRoutingModule } from './manage-projects-routing.module';
import { ManageProjectsComponent } from './manage-projects.component';
import { NgxSpinnerModule } from "ngx-spinner";
import {PaginatorModule} from 'primeng/paginator';


@NgModule({
  declarations: [ManageProjectsComponent],
  imports: [
    CommonModule,
    ManageProjectsRoutingModule,
    PaginatorModule,
    NgxSpinnerModule
  ]
})
export class ManageProjectsModule { }
