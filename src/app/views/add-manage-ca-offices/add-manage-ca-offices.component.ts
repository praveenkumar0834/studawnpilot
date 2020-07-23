import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { ApiServicesService } from '../../services/api-services.service';
import { nameValidator } from '../../validators/app-validator';
import { CAOfficeDetails } from '../../domain/caOffice';
import { StateService } from '../../services/state.service';
import { CaOfficeService } from '../../services/ca-office.service';
import { MessageService } from 'primeng/api';
import { LocationService } from '../../services/location.service';
import { RegionDetails } from '../../domain/regionDetails';
import { NgxSpinnerService } from "ngx-spinner";
import swal from 'sweetalert2';
import { SectionListService } from '../../services/section-list.service';
@Component({
  selector: 'app-add-manage-ca-offices',
  templateUrl: './add-manage-ca-offices.component.html',
  styleUrls: ['./add-manage-ca-offices.component.css']
})
export class AddManageCaOfficesComponent implements OnInit {

  addUserForm: FormGroup;
  caOfficeDtls = new CAOfficeDetails();
  stateList: any;
  msg: any;
  userId: string;
  loginusrDetails: any;
  regionDtls = new RegionDetails()
  errorMsg: any;
  locationList = [];
  locationval;
  pageTitle: string;
  addbtnFlag: boolean;
  updateCAdetails: any;
  caDetailsAdd: any;
  sectionList = [];
  sectionListArray = [];
  selectedSections = [];
  constructor(private caoffice: CaOfficeService, private spinner: NgxSpinnerService,
    private locationService: LocationService,
    private messageService: MessageService, private activatedRoute: ActivatedRoute,
    private sectionListService: SectionListService, public router: Router, private stateservice: StateService) { }

  stateListUrl: string = "stateList"
  ngOnInit() {
    this.getLocationList();
    // this.getSectionList();
    this.loginusrDetails = JSON.parse(localStorage.getItem('loginusrDtls'));
    this.activatedRoute.params.subscribe((params: Params) => {
      if (params.userID) {
        this.pageTitle = 'Edit CAOffice'
        this.addbtnFlag = false;
        this.getCaofficedetailsById(params.userID)

      } else {
        this.pageTitle = 'Add CAOffice'
        this.addbtnFlag = true;
        this.initialData();
      }
    });

    
    let section = {
      "regionId": this.loginusrDetails.regionId,
      "keywords": ""
    }
    this.sectionListService.getsectionList(section).subscribe(data => {
      this.sectionList = data.response;
    })


    let obj = {
      "keywords": ""
    }
    this.stateservice.getstateList(obj).subscribe(data => {
      this.stateList = data.response;
    })



  }


 
  initialData() {
    this.caOfficeDtls.stateId = "";
    this.caOfficeDtls.caOffciestatus = "1";

    this.caOfficeDtls.region = this.loginusrDetails.regionId;

  }
  // getSectionList(){
  //     }
  getLocationList() {
    let obj2 = {
      "keywords": ""
    }
    this.locationService.getLocationDtls(obj2).subscribe(data => {
      this.locationList = data.response

    })
  }
  addCAOffice(status) {

    if (status) {
       this.spinner.show();
      this.sectionListArray = [];
      this.selectedSections.forEach(element => {
        this.sectionListArray.push(element.sectionId)
        console.log(this.sectionListArray)
      });
      this.caOfficeDtls.region = this.loginusrDetails.regionId;
      this.caOfficeDtls.userId = this.loginusrDetails.userId;
      this.caOfficeDtls.location = this.locationval.districtName;
      this.caOfficeDtls.sectionIds = this.sectionListArray;

      this.caoffice.addCAOffice(this.caOfficeDtls).subscribe(data => {
         this.spinner.hide();
        this.caDetailsAdd = data

        if (data.status == "error") {
          this.msg = data.error_message
          this.openErrorCancelSwal(this.msg);
          setTimeout(() => {
          }, 3000)
        } else {
          this.msg = data.response
          this.openSuccessSwal(this.msg);
          setTimeout(() => {
            this.router.navigate(['manage-ca-offices'])
          }, 3000)

        }
      })
    }
  }
  openErrorCancelSwal(msg) {
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
  getCaofficedetailsById(caOfficeId) {
    this.spinner.show();

    this.caoffice.getCaofficedetailsById(caOfficeId).subscribe(data => {
      this.spinner.hide();

      this.caOfficeDtls = data.response;
      this.locationval = this.converobj(this.caOfficeDtls.location);
      // alert(this.caOfficeDtls.location)
      this.selectedSections = this.conversectionobj(data.response.sectionIds);    
      console.log("loc")
      console.log(this.locationval)
    })
  }
  converobj(name) {
    console.log("good")
    console.log(this.locationList)
    let objt = this.locationList.find(item => item.districtName == name)
    return objt;
  }
  conversectionobj(sectionObjList) {
    console.log(this.sectionList)
    let objectList = []
    if(sectionObjList !== null && sectionObjList !==  undefined && sectionObjList !== '') {
      for(let i=0 ; i< sectionObjList.length; i++) {
        console.log(sectionObjList[i])
        let objt = this.sectionList.find(item => item.sectionId == sectionObjList[i])
        objectList.push(objt)
      }
    }
    return objectList;
   
    
  }

  

  updateCAOffice(status) {

    if (status) {
      this.spinner.show();
      this.sectionListArray = [];
      this.selectedSections.forEach(element => {
        this.sectionListArray.push(element.sectionId)
     //   console.log(this.sectionListArray)
      });
      this.caOfficeDtls.userId = this.loginusrDetails.userId;
      this.caOfficeDtls.sectionIds = this.sectionListArray;
      this.caOfficeDtls.location = this.locationval.districtName;
      this.caoffice.updateCAOffice(this.caOfficeDtls).subscribe(data => {
        this.spinner.hide();
        this.updateCAdetails = data;
        if (data.status == "error") {
          this.msg = data.error_message
          this.openErrorCancelSwal(this.msg);
          setTimeout(() => {
          }, 3000)
        } else {
          this.msg = data.response
          this.openSuccessSwal(this.msg);
          setTimeout(() => {
            this.router.navigate(['manage-ca-offices'])
          }, 3000)

        }
      }, error => {
        this.spinner.hide();
      })
    }
  }

  alertmessage(severity_msg, summary_type, msg) {
    this.messageService.clear();
    this.messageService.add({ severity: severity_msg, summary: summary_type, detail: msg, life: 10000 });
  }
  cancel() {
    this.router.navigate(['/manage-ca-offices']);
  }
}