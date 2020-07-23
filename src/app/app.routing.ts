import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';
import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { ForgotpasswordComponent } from './views/forgotpassword/forgotpassword.component'; 
import { ValidateotpComponent } from './views/validateotp/validateotp.component'; 
import { ResetpasswordComponent } from './views/resetpassword/resetpassword.component'; 

export const routes: Routes = [ 
  { path: '',redirectTo: 'login',pathMatch: 'full',},
  { path: '404',component: P404Component, data: { title: 'Page 404' }},
  { path: '500',component: P500Component,data: {title: 'Page 500'}},
  {path: 'login',component: LoginComponent,data: {title: 'Login Page'}},
  {path: 'forgotpassword',component: ForgotpasswordComponent,data: {title: 'Login Page'}},
  {path: 'validateotp',component: ValidateotpComponent,data: {title: 'Login Page'}},
  {path: 'resetpassword',component: ResetpasswordComponent,data: {title: 'Login Page'}},
  {path: '',component: DefaultLayoutComponent,data: {title: 'Home'},
  children: [
    {
      path: 'dashboard',
      loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
    },
 
  
  {
    path: 'changepassword',
    loadChildren: () => import('./views/changepassword/changepassword.module').then(m => m.ChangepasswordModule)
  },
  
  
  
  
  {
    path: 'manage-users',
    loadChildren: () => import('./views/manage-users/manage-users.module').then(m => m.ManageUsersModule)
  },
  {
    path: 'manage-users-add',
    loadChildren: () => import('./views/manage-users-add/manage-users-add.module').then(m => m.ManageUsersAddModule)
  },
  {
    path: 'manage-users-edit/:userID',
    loadChildren: () => import('./views/manage-users-add/manage-users-add.module').then(m => m.ManageUsersAddModule)
  },
  {

    path: 'manage-ca-offices',
    loadChildren: () => import('./views/manage-ca-offices/manage-ca-offices.module').then(m => m.ManageCaOfficesModule)
  },
  {
    path: 'add-manage-ca-offices',
    loadChildren: () => import('./views/add-manage-ca-offices/add-manage-ca-offices.module').then(m => m.AddManageCaOfficesModule)
  },
  {
    path: 'edit-manage-ca-offices/:userID',
    loadChildren: () => import('./views/add-manage-ca-offices/add-manage-ca-offices.module').then(m => m.AddManageCaOfficesModule)
  },
  {
    path: 'manage-cheque-book',
    loadChildren: () => import('./views/manage-cheque-book/manage-cheque-book.module').then(m => m.ManageChequeBookModule)
  },
  {
    path: 'cheque-book-add',
    loadChildren: () => import('./views/cheque-book-add/cheque-book-add.module').then(m => m.ChequeBookAddModule)
  },
  {
    path: 'cheque-book-edit/:chequeBookId',
    loadChildren: () => import('./views/cheque-book-add/cheque-book-add.module').then(m => m.ChequeBookAddModule)
  },
  {
    path: 'manage-land-rate',
    loadChildren: () => import('./views/manage-land-rate/manage-land-rate.module').then(m => m.ManageLandRateModule)
  },
  {
    path: 'manage-land-rate-add',
    loadChildren: () => import('./views/manage-land-rate-add/manage-land-rate-add.module').then(m => m.ManageLandRateAddModule)
  },
  {
    path: 'manage-land-rate-edit',
    loadChildren: () => import('./views/manage-land-rate-edit/manage-land-rate-edit.module').then(m => m.ManageLandRateEditModule)
  },
  {
    path: 'manage-locations',
    loadChildren: () => import('./views/manage-locations/manage-locations.module').then(m => m.ManageLocationsModule)
  },
  {
    path: 'manage-projects',
    loadChildren: () => import('./views/manage-projects/manage-projects.module').then(m => m.ManageProjectsModule)
  },
  {
    path: 'manage-locations-add',
    loadChildren: () => import('./views/manage-locations-add/manage-locations-add.module').then(m => m.ManageLocationsAddModule)
  },
  {
    path: 'manage-locations-edit',
    loadChildren: () => import('./views/manage-locations-edit/manage-locations-edit.module').then(m => m.ManageLocationsEditModule)
  },
  {
    path: 'manage-awards',
    loadChildren: () => import('./views/manage-awards/manage-awards.module').then(m => m.ManageAwardsModule)
  },
  {
    path: 'create-manage-awards',
    loadChildren: () => import('./views/create-manage-awards/create-manage-awards.module').then(m => m.CreateManageAwardsModule)
  },
  {
    path: 'edit-manage-awards',
    loadChildren: () => import('./views/edit-manage-awards/edit-manage-awards.module').then(m => m.EditManageAwardsModule)
  },
  {
    path: 'reports',
    loadChildren: () => import('./views/reports/reports.module').then(m => m.ReportsModule)
  },
  {
    path: 'award-reconcilation',
    loadChildren: () => import('./views/award-reconcilation/award-reconcilation.module').then(m => m.AwardReconcilationModule)
  },
  {
    path: 'taluk-add',
    loadChildren: () => import('./views/taluk-add/taluk-add.module').then(m => m.TalukAddModule)
  },
  {
    path: 'taluk-edit',
    loadChildren: () => import('./views/taluk-edit/taluk-edit.module').then(m => m.TalukEditModule)
  },
  {
    path: 'taluk-upload',
    loadChildren: () => import('./views/taluk-upload/taluk-upload.module').then(m => m.TalukUploadModule)
  },
  {
    path: 'village-add',
    loadChildren: () => import('./views/village-add/village-add.module').then(m => m.VillageAddModule)
  },
  {
    path: 'village-edit',
    loadChildren: () => import('./views/village-edit/village-edit.module').then(m => m.VillageEditModule)
  },
  {
    path: 'village-upload',
    loadChildren: () => import('./views/village-upload/village-upload.module').then(m => m.VillageUploadModule)
  },  {
    path: 'district-add',
    loadChildren: () => import('./views/district-add/district-add.module').then(m => m.DistrictAddModule)
  },
  {
    path: 'district-edit',
    loadChildren: () => import('./views/district-edit/district-edit.module').then(m => m.DistrictEditModule)
  },
  {
    path: 'manage-template',
    loadChildren: () => import('./views/manage-template/manage-template.module').then(m => m.ManageTemplateModule)
  },
  {
    path: 'manage-projects',
    loadChildren: () => import('./views/manage-projects/manage-projects.module').then(m => m.ManageProjectsModule)
  },
  {
    path: 'project-add',
    loadChildren: () => import('./views/project-add/project-add.module').then(m => m.ProjectAddModule)
  },
  {
    path: 'project-edit/:projectID',
    loadChildren: () => import('./views/project-add/project-add.module').then(m => m.ProjectAddModule)
  },
  // {
  //   path: 'project-edit',
  //   loadChildren: () => import('./views/project-edit/project-edit.module').then(m => m.ProjectEditModule)
  // },
  {
    path: 'crop-awards',
    loadChildren: () => import('./views/crop-awards/crop-awards.module').then(m => m.CropAwardsModule)
  },
  {
    path: 'create-crop-awards',
    loadChildren: () => import('./views/create-crop-awards/create-crop-awards.module').then(m => m.CreateCropAwardsModule)
  },
  {
    path: 'edit-crop-awards',
    loadChildren: () => import('./views/edit-crop-awards/edit-crop-awards.module').then(m => m.EditCropAwardsModule)
  },
  {
    path: 'undisbursed-beneficiary-list',
    loadChildren: () => import('./views/undisbursed-beneficiary-list/undisbursed-beneficiary-list.module').then(m => m.UndisbursedBeneficiaryListModule)
  },
  {
    path: 'pending-awards-list',
    loadChildren: () => import('./views/pending-awards-list/pending-awards-list.module').then(m => m.PendingAwardsListModule)
  },
  {
    path: 'chequeissued-list',
    loadChildren: () => import('./views/chequeissued-list/chequeissued-list.module').then(m => m.ChequeissuedListModule)
  },
  {
    path: 'stale-cheque-list',
    loadChildren: () => import('./views/stale-cheque-list/stale-cheque-list.module').then(m => m.StaleChequeListModule)
  },
  {
    path: 'acquittance',
    loadChildren: () => import('./views/acquittance/acquittance.module').then(m => m.AcquittanceModule)
  },
  {
    path: 'acquittance-crop',
    loadChildren: () => import('./views/acquittance-crop/acquittance-crop.module').then(m => m.AcquittanceCropModule)
  },
  {
    path: 'disbursement-details',
    loadChildren: () => import('./views/disbursement-details/disbursement-details.module').then(m => m.DisbursementDetailsModule)
  },
 
  {
    path: 'manage-land-data',
    loadChildren: () => import('./views/manage-land-data/manage-land-data.module').then(m => m.ManageLandDataModule)
  },
  {
    path: 'manage-land-data-add',
    loadChildren: () => import('./views/manage-land-data-add/manage-land-data-add.module').then(m => m.ManageLandDataAddModule)
  },
  {
    path: 'manage-land-data-edit/:landGazetteID',
    loadChildren: () => import('./views/manage-land-data-add/manage-land-data-add.module').then(m => m.ManageLandDataAddModule)
  },
  // {
  //   path: 'manage-land-data-edit',
  //   loadChildren: () => import('./views/manage-land-data-edit/manage-land-data-edit.module').then(m => m.ManageLandDataEditModule)
  // }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}