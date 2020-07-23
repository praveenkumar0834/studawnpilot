import { Component, OnInit } from '@angular/core';
import { ChequeBookDtls } from '../../domain/addChequebook';
import { ChequeService } from '../../services/cheque.service';
import { CaofficeService } from '../../services/caoffice.service';
import { RowService } from '../../services/row.service';
import { AddProjectService } from '../../services/add-project.service';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { DatePipe } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';
import swal from 'sweetalert2';
@Component({
  selector: 'app-cheque-book-add',
  templateUrl: './cheque-book-add.component.html',
  styleUrls: ['./cheque-book-add.component.css']
})
export class ChequeBookAddComponent implements OnInit {
  chequeBookDtls=new ChequeBookDtls()
  loginusrDetails: any;
  caofficeList= [];
  
  msg: any;
  pageTitle: string;
  addbtnFlag: boolean;
  constructor(private chequeService:ChequeService,private rowservice: RowService,private spinner: NgxSpinnerService,
    private addprojectService:AddProjectService,
    private messageService: MessageService,private activatedRoute: ActivatedRoute, private caofficeService: CaofficeService,public router: Router) { }

  ngOnInit() {
    this.loginusrDetails = JSON.parse(localStorage.getItem('loginusrDtls'));
    this.getCAList();
    this.activatedRoute.params.subscribe((params: Params) => {
      if (params.chequeBookId) {
        this.pageTitle = 'Edit Chequebook Details'
        this.addbtnFlag = false;
        this.getChequedetailsById(params.chequeBookId)

      } else {
        this.pageTitle = 'Add Chequebook Details'
        this.addbtnFlag = true;
        
      }
      this.chequeBookDtls.caOfficeId=""
    });
    
  }
  getCAList(){
    let obj3 = {
      "keywords": "",
      "region": this.loginusrDetails.regionId,
    }
    
    this.caofficeService.getCaofficeDtls(obj3).subscribe(data => {
      this.caofficeList = data.response
      // alert(JSON.stringify(this.caofficeList));
    
      

    })
  }
addCheque(status){
   
  if (status) {
    this.spinner.show();
 
this.chequeBookDtls.userId=this.loginusrDetails.userId
this.chequeBookDtls.startingChequeNumbers=parseInt(this.chequeBookDtls.startingChequeNumbers);
this.chequeBookDtls.endingChequeNumbers=parseInt(this.chequeBookDtls.endingChequeNumbers);
this.chequeBookDtls.chequeLeafs=parseInt(this.chequeBookDtls.chequeLeafs);

this.chequeBookDtls.caOfficeId=  this.chequeBookDtls.caOfficeId;
  this.chequeService.addCheque(this.chequeBookDtls).subscribe(data=>{
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
        this.router.navigate(['manage-cheque-book'])
      }, 3000)

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
getChequedetailsById(chequeBookId){
  this.spinner.show();

  this.chequeService.getChequedetailsById(chequeBookId).subscribe(data=>{
    this.spinner.hide();

    this.chequeBookDtls=data.response
  })
}
editCheque(status){
  if (status) {
    this.spinner.show();
  this.chequeBookDtls.userId=this.loginusrDetails.userId
  this.chequeService.editCheque(this.chequeBookDtls).subscribe(data=>{
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
        this.router.navigate(['manage-cheque-book'])
      }, 3000)

    }
  },error=>{
    this.spinner.hide();
    })
}
}
cancel() {
  this.router.navigate(['/manage-cheque-book']);
}
}
