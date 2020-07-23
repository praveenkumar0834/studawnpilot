import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StateService } from '../../../services/state.service';
import { DistrictaddDetails } from '../../../domain/districtadd';
import { ActivatedRoute, Router } from '@angular/router';
import {FormsModule, NgForm} from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { LocationlistService } from '../../../services/locationlist.service';
import { DistrictService } from '../../../services/district.service';
import swal from 'sweetalert2';
import { TalukService } from '../../../services/taluk.service';
import { TalukaddDetails } from '../../../domain/talukadd';
import { VillageaddDetails } from '../../../domain/villageadd';
import { VillageService } from '../../../services/village.service';
@Component({
  selector: 'app-village',
  templateUrl: './village.component.html',
  styleUrls: ['./village.component.css']
})
export class VillageComponent implements OnInit {
  @ViewChild('file') el:ElementRef;
  @ViewChild('villageFile') villageFile:ElementRef;
  District: boolean = false;
  Taluk:boolean=false;
  Village: boolean=false;
  locationList: any;
  totalCount: any;
  editdistrict: any;
  Upload: boolean=false;
  
  districtaddDtls = new DistrictaddDetails();
  talukaddDtls=new TalukaddDetails();
  villageaddDtls=new VillageaddDetails();
  stateList: any;
  pageTitle: string;
  addbtnFlag: boolean;
  districtlistBasedstate: any;
  districtadd: any;
  msg: any;
  districtview: any;
  districtlist: any;
  talukadd: any;
  taluklist: any;
  filecount: any;

  constructor(private districtService:DistrictService,private villageService:VillageService,private talukService:TalukService,private locationListService:LocationlistService,private modalService: NgbModal,private spinner: NgxSpinnerService,private activatedRoute: ActivatedRoute, public router: Router, private stateservice: StateService) { }

  ngOnInit() {
   this.list('')
    let obj = {
      "keywords": ""
    }
    this.stateservice.getstateList(obj).subscribe(data => {
      this.stateList = data.response;
      // alert(JSON.stringify(this.stateList))
      
    })
    this.initialData()
  }
  initialData(){

    
   
  }
  showDialogDistrict(operation,data) {
    if(operation == 'add') {
      this.pageTitle = 'Add District'
      this.addbtnFlag = true;
      this.districtaddDtls = new DistrictaddDetails();
      this.districtaddDtls.stateId=""
    }else {
        // this.districtaddDtls = data;
        this.pageTitle = 'Edit District'
        this.addbtnFlag = false;
        this.districtViewbasedonId(data.districtId);
    }
      this.District = true;

  }
  
  showDialogTaluk(operation,data) {
    if(operation == 'add') {
      this.pageTitle = 'Add Taluk'
      this.addbtnFlag = true;
      this.talukaddDtls=new TalukaddDetails();
      this.talukaddDtls.stateId=""
      this.talukaddDtls.districtId=""
    }else {
       
        this.pageTitle = 'Edit Taluk'
        this.addbtnFlag = false;
        this.talukViewbasedonId(data.talukId);
    }
    this.Taluk = true;
}
showDialogVillage(operation,data) {
  if(operation == 'add') {
    this.pageTitle = 'Add Village'
    this.addbtnFlag = true;
    this.villageaddDtls=new VillageaddDetails();
    this.villageaddDtls.stateId=""
      this.villageaddDtls.districtId=""
      this.villageaddDtls.talukId=""
  }else {
     
      this.pageTitle = 'Edit Village'
      this.addbtnFlag = false;
      this.villageViewbasedId(data.villageId);
      
  }
  this.Village = true;
}
showDialogUpload() {
  this.talukaddDtls=new TalukaddDetails();
  this.villageaddDtls=new VillageaddDetails();
  this.talukaddDtls.stateId=""
    this.talukaddDtls.districtId=""
    this.villageaddDtls.stateId=""
    this.villageaddDtls.districtId=""
    this.villageaddDtls.talukId=""
  this.Upload = true;
}

  createModel(content) {
   
    this.modalService.open(content, { centered: true ,size:'lg'});
  }
  

districtEdit(id,status){
  if (status) {
    this.spinner.show();
  this.districtaddDtls.districtId=id;
  this.districtService.getDistricteditDtls(this.districtaddDtls).subscribe(data => {
    this.spinner.hide();
    this.editdistrict = data;
  if (data.status =="error") {
      this.msg = data.error_message
      this.openErrorCancelSwal(this.msg);
      
    } else {
      this.msg = data.response
      this.openSuccessSwal(this.msg);
     this.District=false
     this.list('')

    }  
  },error=>{
    this.spinner.hide();
  })
}
}
districtAdd(status){
  if (status) {
    this.spinner.show();
  this.districtService.getDistrictadd(this.districtaddDtls).subscribe(data => {
   
    this.spinner.hide();
    this.districtadd=data
    if (data.status =="error") {
      this.msg = data.error_message
      this.openErrorCancelSwal(this.msg);
      
    } else {
      this.msg = data.response
      this.openSuccessSwal(this.msg);
      this.District=false
     

    }
  
  },error=>{
    this.spinner.hide();
    })
}
}
talukAdd(status){
// alert(status)
  if (status) {
    // this.talukaddDtls.talukId=id;
    this.spinner.show();
    const obj = {
      'districtId':parseInt( this.talukaddDtls.districtId),
      'talukName':this.talukaddDtls.talukName
    }
    this.talukaddDtls.stateId = parseInt( this.talukaddDtls.stateId);
    this.talukaddDtls.districtId = parseInt( this.talukaddDtls.districtId);
  let main_form: FormData = new FormData();
  main_form.append('data',JSON.stringify(obj));
  this.talukService.getTalukadd(main_form).subscribe(data => {
    this.spinner.hide();
    if (data.status =="error") {
      this.msg = data.error_message
      this.openErrorCancelSwal(this.msg);
      
    } else {
      this.msg = data.response
      this.openSuccessSwal(this.msg);
      this.Taluk=false
     

    }
  },error=>{
    this.spinner.hide();
    }
  )
}
}

talukEdit(id,status){
  if (status) {
    this.spinner.show();
    this.talukaddDtls.talukId=id;
    this.talukService.getTalukedit(this.talukaddDtls).subscribe(data => {
    this.spinner.hide();
    if (data.status =="error") {
      this.msg = data.error_message
      this.openErrorCancelSwal(this.msg);
      
    } else {
      this.msg = data.response
      this.openSuccessSwal(this.msg);
     this.Taluk=false
     this.list('')

    } 
    },error=>{
      this.spinner.hide();
    })
    }
}
villageAdd(status){
  
    if (status) {
      const obj = {
        'talukId':parseInt( this.villageaddDtls.talukId),
        'villageName':this.villageaddDtls.villageName
      }
      let main_form: FormData = new FormData();
      main_form.append('data',JSON.stringify(obj));
    this.villageService.getVillageadd(main_form).subscribe(data => {
      this.spinner.hide();
      if (data.status =="error") {
        this.msg = data.error_message
        this.openErrorCancelSwal(this.msg);
        
      } else {
        this.msg = data.response
        this.openSuccessSwal(this.msg);
        this.Village=false
       
  
      }
    },error=>{
      this.spinner.hide();
      })
  }
  }
villageEdit(id,status){
  if (status) {
    this.spinner.show();
    this.villageaddDtls.villageId=id;
    this.villageService.getVillageedit(this.villageaddDtls).subscribe(data => {
    this.spinner.hide();
    if (data.status =="error") {
      this.msg = data.error_message
      this.openErrorCancelSwal(this.msg);
      
    } else {
      this.msg = data.response
      this.openSuccessSwal(this.msg);
     this.Village=false
     this.list('')

    } 
    },error=>{
      this.spinner.hide();
    })
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

districtViewbasedonId(id){
  this.districtaddDtls.districtId=id
  this.districtService. getDistrictbyId(this.districtaddDtls).subscribe(data => {
    this.districtaddDtls=data.response 
})
}
talukViewbasedonId(id){
  this.talukaddDtls.talukId=id
  this.talukService. getTalukview(this.talukaddDtls).subscribe(data => {
    this.talukaddDtls=data.response;
    this.districtListbasedStateId(this.talukaddDtls.stateId)

})
}
villageViewbasedId(id){
  this.villageaddDtls.villageId=id
  this.villageService. getVillageview(this.villageaddDtls).subscribe(data => {
    this.villageaddDtls=data.response;
    this.districtListbasedStateId(this.villageaddDtls.stateId);
  
    this.talukListbasedDistrictId(this.villageaddDtls.districtId)

})
}
  paginate(event) {
    this.spinner.show();
    let obj = {
      "size": event.rows,
      "page": event.page,
      "keywords": '',
      "sortBy": "villageId"
    }
    this.locationListService.locationList(obj).subscribe(data => {
      this.spinner.hide();
      this.locationList = data.response.list;
      this.totalCount = data.response.totalCount;
    
    })
  }
list(searchtext) {
  this.spinner.show();
    let obj = {
      "size":10,
      "page":0,
      "keywords":searchtext,
      "sortBy":"villageId"
    }
    this.locationListService.locationList(obj).subscribe(data => {
      this.spinner.hide();
      this.locationList = data.response.list;
      // alert(JSON.stringify(this.locationList))
      this.totalCount = data.response.totalCount;
    })
  }
  districtListbasedStateId(stateId){
  
  if(stateId !== '' && stateId !== undefined && stateId !== null) {
    this.districtService.getDistrictbasedState(stateId).subscribe(data => {
      this.districtlist=data.response
      //alert(JSON.stringify(this.districtlist))
     
    
    })
  }   
  }
  talukListbasedDistrictId(districtId){
  
    if(districtId !== '' && districtId !== undefined && districtId !== null) {
      this.talukService.getTalukbasedDistrict(districtId).subscribe(data => {
        this.taluklist=data.response
        // alert(JSON.stringify(this.taluklist))
       
      
      })
    }   
    }
  cancel() {
    this.router.navigate(['/manage-locations/village']);
  }
  readUrl() {
    this.spinner.show();
    
    this.filecount = this.el.nativeElement.files.length;
    let formData: FormData = new FormData();
    for (var y = 0; y < this.filecount; y++) {
      formData.append("file", this.el.nativeElement.files[y])
    }
 
  
    this.talukService.getTalukadd(formData).subscribe(data => {
      this.spinner.hide();
      if (data.status =="error") {
        this.msg = data.error_message
        this.openErrorCancelSwal(this.msg);
        
      } else {
        this.msg = data.response
        this.openSuccessSwal(this.msg);
        this.list('')
       
  
      }
    },error=>{
      this.spinner.hide();
    })
  
  }
  talukreadUrl() {
    this.spinner.show();
    this.filecount = this.villageFile.nativeElement.files.length;
    let formData: FormData = new FormData();
    for (var y = 0; y < this.filecount; y++) {
      formData.append("file", this.villageFile.nativeElement.files[y])
    }
 
  
    this.villageService.getVillageadd(formData).subscribe(data => {
      this.spinner.hide();
      if (data.status =="error") {
        this.msg = data.error_message
        this.openErrorCancelSwal(this.msg);
        
      } else {
        this.msg = data.response
        this.openSuccessSwal(this.msg);
        this.list('')
       
  
      }
    },error=>{
      

      this.spinner.hide();
      swal.fire("ERROR")
    })
  }
  
}
