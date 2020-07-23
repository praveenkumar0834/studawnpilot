import { Component, OnInit } from '@angular/core';
import { AdduserDtls } from '../../domain/addUser';
import { MessageService } from 'primeng/api';
import { Location } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { ApiServicesService } from '../../services/api-services.service';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { AdduserService } from '../../services/adduser.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { SelectItem } from 'primeng/api';
import { RoleService } from '../../services/role.service';
import { CategoryService } from '../../services/category.service';
import { LocationService } from '../../services/location.service';
import { CaofficeService } from '../../services/caoffice.service';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { NgxSpinnerService } from "ngx-spinner";
import swal from 'sweetalert2';

@Component({
  selector: 'app-manage-users-add',
  templateUrl: './manage-users-add.component.html',
  styleUrls: ['./manage-users-add.component.css',]
})
export class ManageUsersAddComponent implements OnInit {

  adduserDtls = new AdduserDtls()
  loginusrDetails: any;

  roleList: any;
  categoryList: any;

  caofficeList: any;
  locationList = [];
  locationval;
  pageTitle;
  addbtnFlag: boolean;
  updatedBy: any;
  msg: any;
  constructor(private spinner: NgxSpinnerService,private router: Router, private activatedRoute: ActivatedRoute, private messageService: MessageService, private locationService: LocationService, private caofficeService: CaofficeService, private adduserService: AdduserService, private roleService: RoleService, private categoryService: CategoryService, private fb: FormBuilder, private allservice: ApiServicesService) {

  }

  ngOnInit() {
    this.getLocationList();
    this.loginusrDetails = JSON.parse(localStorage.getItem('loginusrDtls'));
    this.activatedRoute.params.subscribe((params: Params) => {
      if (params.userID) {
        this.pageTitle = 'Edit User'
        this.addbtnFlag = false;

        this.getUserdetailsById(params.userID);
      } else {
        this.pageTitle = 'Add User'
        this.addbtnFlag = true;
        this.initialData();
      }
    });


    // alert(this.loginusrDetails.regionId)


    let obj = {
      "keywords": ""
    }
    this.roleService.getRoleDtls(obj).subscribe(data => {
      this.roleList = data.response
      // alert(JSON.stringify(this.roleList))
    })

    let obj1 = {
      "keywords": ""
    }
    this.categoryService.getCategoryDtls(obj1).subscribe(data => {
      this.categoryList = data.response
      // alert(JSON.stringify(this.categoryList))
    })

    let obj3 = {
      "keywords": "",
      "region": this.loginusrDetails.regionId,
    }
    this.caofficeService.getCaofficeDtls(obj3).subscribe(data => {
      this.caofficeList = data.response
      // alert(JSON.stringify(this.categoryList))
    })
  }

  getLocationList() {
    let obj2 = {
      "keywords": ""
    }
    this.locationService.getLocationDtls(obj2).subscribe(data => {
      this.locationList = data.response

    })
  }
  initialData() {
    this.adduserDtls.caOffice.caOfficeId = ""
    this.adduserDtls.role.roleId = ""
    this.adduserDtls.category.categoryId = ""
    this.adduserDtls.location = ""

    // alert(JSON.stringify(this.loginusrDetails))

    this.adduserDtls.userStatus = parseInt('1')
    
    
    this.adduserDtls.region.gmId = this.loginusrDetails.regionId
  }
  getUserdetailsById(userId) {
    this.spinner.show();
    this.adduserService.getUserdetailsById(userId).subscribe(data => {
      this.spinner.hide();
      // alert(JSON.stringify(data));
      this.adduserDtls = data.response;
     
      this.locationval = this.converobj(this.adduserDtls.location);
// alert(this.adduserDtls.location)
      console.log("welcome")
      console.log(this.locationval)
    })
  }
  add(status) {

    if (status) {
      this.spinner.show();
      //  alert(JSON.stringify(this.locationval));
      // this.adduserDtls.location=this.locationList.districtName
      this.adduserDtls.createdBy = this.loginusrDetails.userId
      this.adduserDtls.role.roleId = parseInt(this.adduserDtls.role.roleId)
      this.adduserDtls.category.categoryId = parseInt(this.adduserDtls.category.categoryId);
      this.adduserDtls.location = this.locationval.districtName;
      this.adduserDtls.caOffice.caOfficeId = this.adduserDtls.caOffice.caOfficeId
      this.adduserDtls.region.gmId = parseInt(this.loginusrDetails.regionId)
      this.adduserService.getAddUserDtls(this.adduserDtls).subscribe(data => {
        this.spinner.hide();
        
        // if (data.error_message !== null && data.error_message !== undefined) {
         
        //   this.alertmessage('error', 'Error', data.error_message)
        // } else {
           
        //     this.alertmessage('success', 'Success', 'User Added Successfully');
           
        //    setTimeout(()=>{
        //       this.router.navigate(['manage-users'])
        //   },3000)

        // }
        if (data.status =="error") {
          this.msg = data.error_message
          this.openErrorCancelSwal(this.msg);
          setTimeout(() => {
          }, 3000)
        } else {
          this.msg = data.response
          this.openSuccessSwal(this.msg);
          setTimeout(() => {
            this.router.navigate(['manage-users'])
          }, 3000)

        }

      }
      ,error=>{
        this.spinner.hide();
        }
      )

    }

  }
  openErrorCancelSwal(msg){
    swal.fire({
      icon: 'error',
      title: msg,
      showConfirmButton: false,
      timer: 3500
    })
  }

  openSuccessSwal(success) {
    swal.fire({
      icon: 'success',
      title: success,
      showConfirmButton: false,
      timer: 3500

    })
  }
  
  update(status) {
    if (status) {
      this.spinner.show();
      this.adduserDtls.role.roleId = parseInt(this.adduserDtls.role.roleId)
      
      this.adduserDtls.location = this.locationval.districtName;
      
      this.adduserDtls.updatedBy=this.loginusrDetails.userId
      this.adduserDtls.userStatus=parseInt(this.adduserDtls.userStatus)
      
      this.adduserService.getUpdateUserDtls(this.adduserDtls).subscribe(data => {

        this.spinner.hide();
        if (data.status =="error") {
          this.msg = data.error_message
          this.openErrorCancelSwal(this.msg);
          setTimeout(() => {
          }, 3000)
        } else {
          this.msg = data.response
          this.openSuccessSwal(this.msg);
          setTimeout(() => {
            this.router.navigate(['manage-users'])
          }, 3000)

        }
        
    }
    ,error=>{
      this.spinner.hide();
      });
  }
  }

  converobj(name) {
    console.log("good")
    console.log(this.locationList)
    let objt = this.locationList.find(item => item.districtName == name)
    return objt;
  }
  alertmessage(severity_msg, summary_type, msg) {
    this.messageService.clear();
    this.messageService.add({ severity: severity_msg, summary: summary_type, detail: msg,life:10000 });
  }
  cancel() {
    this.router.navigate(['/manage-users']);
  }
}
