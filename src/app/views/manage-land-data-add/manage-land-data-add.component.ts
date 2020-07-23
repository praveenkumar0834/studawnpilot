import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { LandDataAddDtls } from '../../domain/manage-land-data-add';
import { SectionListService } from '../../services/section-list.service';
import { RowService } from '../../services/row.service';
import { ManageLandDataAddService } from '../../services/manage-land-data-add.service';
import swal from 'sweetalert2';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { StateService } from '../../services/state.service';
import { DistrictService } from '../../services/district.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { TalukService } from '../../services/taluk.service';
import { VillageService } from '../../services/village.service';

@Component({
  selector: 'app-manage-land-data-add',
  templateUrl: './manage-land-data-add.component.html',
  styleUrls: ['./manage-land-data-add.component.css']
})
export class ManageLandDataAddComponent implements OnInit {
  landDataAddDtls = new LandDataAddDtls()
  loginusrDetails: any;
  sectionList = [];
  rowList: any;
  addLandData: any;
  msg: any;
  stateList: any;
  districtlist: any;
  taluklist: any;
  villageList: any;
  @ViewChild('file') el: ElementRef;
  filecount: any;
  pageTitle: string;
  addbtnFlag: boolean;
  landData: any;

  constructor(private sectionListService: SectionListService, private rowservice: RowService,
    private addLandDataService: ManageLandDataAddService, private router: Router, private stateservice: StateService,
    private districtService: DistrictService, private spinner: NgxSpinnerService, private talukService: TalukService, 
    private villageService: VillageService,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.loginusrDetails = JSON.parse(localStorage.getItem('loginusrDtls'));
    this.landDataAddDtls.stateId = "";
    this.landDataAddDtls.districtId = "";
    this.landDataAddDtls.talukId = "";
    this.landDataAddDtls.villageId = "";
    this.landDataAddDtls.rowId = ""
    this.landDataAddDtls.sectionId = ""

    this.activatedRoute.params.subscribe((params: Params) => {
      if (params.landGazetteID) {
        this.pageTitle = 'Edit Land Data'
        this.addbtnFlag = false;

        this.getUserdetailsById(params.landGazetteID);
      } else {
        this.pageTitle = 'Add Land Data'
        this.addbtnFlag = true;
        //this.initialData();
      }
    });

    this.rowservice.getprojectROWList().subscribe(data => {
      this.rowList = data.response
    })
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
  getUserdetailsById(landGazetteId) {
    this.spinner.show();
    this.addLandDataService.getUserdetailsById(landGazetteId).subscribe(data => {
      this.spinner.hide();
      this.landDataAddDtls = data.response;
      this.districtListbasedStateId(this.landDataAddDtls.stateId);
      this.talukListbasedDistrictId(this.landDataAddDtls.districtId);
      this.villageListbasedTalukId(this.landDataAddDtls.talukId);

    })
  }
 
  districtListbasedStateId(stateId) {

    if (stateId !== '' && stateId !== undefined && stateId !== null) {
      this.districtService.getDistrictbasedState(stateId).subscribe(data => {
        this.districtlist = data.response

      })
    }
  }

  talukListbasedDistrictId(districtId) {

    if (districtId !== '' && districtId !== undefined && districtId !== null) {
      this.talukService.getTalukbasedDistrict(districtId).subscribe(data => {
        this.taluklist = data.response
      })
    }
  }
  villageListbasedTalukId(talukId) {

    if (talukId !== '' && talukId !== undefined && talukId !== null) {
      this.villageService.getVillagebasedTaluk(talukId).subscribe(data => {
        this.villageList = data.response
      })
    }
  }
  addLand(status) {

    if (status) {
      this.spinner.show();

      this.landDataAddDtls.stateId = parseInt(this.landDataAddDtls.stateId)
      this.landDataAddDtls.districtId = parseInt(this.landDataAddDtls.districtId)
      this.landDataAddDtls.talukId = parseInt(this.landDataAddDtls.talukId)
      this.landDataAddDtls.villageId = parseInt(this.landDataAddDtls.villageId)
      this.landDataAddDtls.sectionId = parseInt(this.landDataAddDtls.sectionId)
      this.landDataAddDtls.rowId = parseInt(this.landDataAddDtls.rowId)

      this.landDataAddDtls.createdBy = this.loginusrDetails.userId;

      this.filecount = this.el.nativeElement.files.length;
      let formData: FormData = new FormData();
      for (var y = 0; y < this.filecount; y++) {
        formData.append("file", this.el.nativeElement.files[y])
      }
      formData.append("landGazette", JSON.stringify(this.landDataAddDtls))
      this.addLandDataService.addLandData(formData).subscribe(data => {
        this.spinner.hide();
        this.addLandData = data
        if (data.status == "error") {
          this.msg = data.error_message
          this.openErrorCancelSwal(this.msg);
          setTimeout(() => {
          }, 3000)
        } else {
          this.msg = data.response
          this.openSuccessSwal(this.msg);
          setTimeout(() => {
            this.router.navigate(['manage-land-data'])
          }, 3000)

        }
      }
        , error => {
          this.spinner.hide();
        })
    }
  }

  updateLand(status){
    if (status) {
      this.spinner.show();

      this.landDataAddDtls.stateId = parseInt(this.landDataAddDtls.stateId)
      this.landDataAddDtls.districtId = parseInt(this.landDataAddDtls.districtId)
      this.landDataAddDtls.talukId = parseInt(this.landDataAddDtls.talukId)
      this.landDataAddDtls.villageId = parseInt(this.landDataAddDtls.villageId)
      this.landDataAddDtls.sectionId = parseInt(this.landDataAddDtls.sectionId)
      this.landDataAddDtls.rowId = parseInt(this.landDataAddDtls.rowId)

      this.landDataAddDtls.userId = this.loginusrDetails.userId;

     
      this.addLandDataService.updateLandData(this.landDataAddDtls).subscribe(data => {
        this.spinner.hide();
        this.addLandData = data
        if (data.status == "error") {
          this.msg = data.error_message
          this.openErrorCancelSwal(this.msg);
          setTimeout(() => {
          }, 3000)
        } else {
          this.msg = data.response
          this.openSuccessSwal(this.msg);
          setTimeout(() => {
            this.router.navigate(['manage-land-data'])
          }, 3000)

        }
      }
        , error => {
          this.spinner.hide();
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

cancel(){
this.router.navigate(['/manage-land-data'])
}
}
