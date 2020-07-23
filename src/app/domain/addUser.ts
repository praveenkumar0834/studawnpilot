import { RoleDetails } from './roleDetails';
import { CategoryDetails } from './categoryDetails';
import { CaOfficeDetails } from './caOfficeDetails';
import { RegionDetails } from './regionDetails';

export class AdduserDtls {
    contactNumber:any;
    email:any;
    location:any;
    userName:any;
    // password:any;
    region:RegionDetails=new RegionDetails();
    userStatus:any;
    createdBy:any;
    role:RoleDetails=new RoleDetails();
    category:CategoryDetails=new CategoryDetails();
    caOffice:CaOfficeDetails=new CaOfficeDetails();
    updatedBy: any;


   
}