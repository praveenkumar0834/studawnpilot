import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageLocationsRoutingModule } from './manage-locations-routing.module';
import { ManageLocationsComponent } from './manage-locations.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TalukComponent } from './taluk/taluk.component';
import { VillageComponent } from './village/village.component';
import { DistrictComponent } from './district/district.component';
import {DialogModule} from 'primeng/dialog';
import {PaginatorModule} from 'primeng/paginator';
import { NgxSpinnerModule } from "ngx-spinner";
import {TabViewModule} from 'primeng/tabview';
@NgModule({
  declarations: [ManageLocationsComponent, 
   
    
    TalukComponent, 
     VillageComponent, DistrictComponent,],
  imports: [
    CommonModule,
    ManageLocationsRoutingModule,
    FormsModule,ReactiveFormsModule,
    DialogModule,
    PaginatorModule,
    NgxSpinnerModule,
    TabViewModule
    
  ]
})
export class ManageLocationsModule { }
