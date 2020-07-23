import { Component, OnInit } from '@angular/core';
import { LanddDataDtls } from '../../domain/manage-land-data-list';
import { ManageLandDataListService } from '../../services/manage-land-data-list.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { StateService } from '../../services/state.service';
import { CAOfficeDetails } from '../../domain/caOffice';
import { DistrictService } from '../../services/district.service';
import { DistrictaddDetails } from '../../domain/districtadd';
import { TalukaddDetails } from '../../domain/talukadd';
import { VillageaddDetails } from '../../domain/villageadd';
import { TalukService } from '../../services/taluk.service';
import { VillageService } from '../../services/village.service';

@Component({
  selector: 'app-manage-land-data',
  templateUrl: './manage-land-data.component.html',
  styleUrls: ['./manage-land-data.component.css']
})
export class ManageLandDataComponent implements OnInit {
  landDataDtls = new LanddDataDtls()
  loginusrDetails: any;
  landDataList: any;
  totalCount: any;
  stateList: any;
  caOfficeDtls = new CAOfficeDetails();
  districtlist: any;
  districtaddDtls = new DistrictaddDetails();
  talukaddDtls = new TalukaddDetails();
  villageaddDtls = new VillageaddDetails();
  taluklist: any;
  villageList: any;
  constructor(private listService: ManageLandDataListService, private districtService: DistrictService,
    private spinner: NgxSpinnerService,private talukService:TalukService,private villageService:VillageService,
    private stateservice: StateService) { }

  ngOnInit() {

    this.loginusrDetails = JSON.parse(localStorage.getItem('loginusrDtls'));
    this.villageaddDtls
    this.villageaddDtls.stateId = "0";
    this.villageaddDtls.districtId = "0";
    this.villageaddDtls.talukId = "0";
    this.villageaddDtls.villageId = "0";


    this.list('')

    let obj = {
      "keywords": ""
    }
    this.stateservice.getstateList(obj).subscribe(data => {
      this.stateList = data.response;
    })
    
  }

  districtListbasedStateId(stateId) {

    if (stateId !== '' && stateId !== undefined && stateId !== null) {
      this.districtService.getDistrictbasedState(stateId).subscribe(data => {
        this.districtlist = data.response

      })
    }
  }

  talukListbasedDistrictId(districtId){
  
    if(districtId !== '' && districtId !== undefined && districtId !== null) {
      this.talukService.getTalukbasedDistrict(districtId).subscribe(data => {
        this.taluklist=data.response      
      })
    }   
    }
    villageListbasedTalukId(talukId){
  
      if(talukId !== '' && talukId !== undefined && talukId !== null) {
        this.villageService.getVillagebasedTaluk(talukId).subscribe(data => {
          this.villageList=data.response        
        })
      }   
      }

  paginate(event) {
    this.spinner.show();
    let obj = {
      "page": event.page,
      "size": event.rows,
      "regionId": this.loginusrDetails.regionId,
      "keywords": '',
      "sortBy": "createdAt",
      "stateId":0,
      "districtId":0,
      "talukId":0,
      "villageId":0
    }

    this.listService.getLandDataList(obj).subscribe(data => {
      this.spinner.hide();
      this.landDataList = data.response;
      this.totalCount = data.totalCount;
      // alert(JSON.stringify(this.projectList))
    })
  }
  list(searchtext) {
   
    this.spinner.show();
    let obj = {
      "page": 0,
      "size": 10,
      "regionId": this.loginusrDetails.regionId,
      "keywords": searchtext,
      "sortBy": "createdAt",
      "stateId":parseInt(this.villageaddDtls.stateId),
      "districtId":parseInt(this.villageaddDtls.districtId),
      "talukId":parseInt(this.villageaddDtls.talukId),
      "villageId":parseInt(this.villageaddDtls.villageId),
    }
    this.listService.getLandDataList(obj).subscribe(data => {
      this.spinner.hide();
      this.landDataList = data.response
      this.totalCount = data.totalCount;
    })
  }
  
}
