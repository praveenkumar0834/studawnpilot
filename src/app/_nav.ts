import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  
  { name: 'Dashboard', url: '/dashboard', 
    //attributes: { hidden: true }
  
 },
  { name: 'Manage User', url: '/manage-users' },
  { name: 'Manage CA Office', url: '/manage-ca-offices' },
  { name: 'Manage Land Awards ', url: '/manage-awards' },
  { name: 'Manage Crop Awards', url: '/crop-awards' },
  { name: 'Manage Reconcilation', url: '/award-reconcilation' },
  { name: 'Manage Land Rate', url: '/manage-land-rate' },
  { name: 'Manage Cheque Book', url: '/manage-cheque-book' },
  { name: 'Manage Land 6(1) Data', url: '/manage-land-data' }, 
  { name: 'Manage Template', url: '/manage-template' },
  {
    name: 'Geo Locations', url: '/manage-locations/village',
    // children: [
    //   { name: 'District', url: '/manage-locations/district', icon: 'fa' },
    //   { name: 'Taluk', url: '/manage-locations/taluk', icon: 'fa' },
    //   { name: 'Village', url: '/manage-locations/village', icon: 'fa' }
    // ]
  },
  { name: 'Manage Project', url: '/manage-projects' },
  { name: 'Reports', url: '/reports' },

];


