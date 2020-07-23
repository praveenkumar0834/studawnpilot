import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiServicesService } from '../../services/api-services.service';
@Component({
  selector: 'app-edit-crop-awards',
  templateUrl: './edit-crop-awards.component.html',
  styleUrls: ['./edit-crop-awards.component.css']
})
export class EditCropAwardsComponent implements OnInit {

  @ViewChild('myModal') public myModal: ModalDirective;
  @ViewChild('myModal1') public myModal1: ModalDirective;


  listFilter: boolean;
  datepickerConfig: Partial<BsDatepickerConfig>;

  addAwardForm: FormGroup;
  paymentForm: FormGroup;
  approveForm: FormGroup;
  rejectForm: FormGroup;
  fundReleaseForm: FormGroup;
  createForm: FormGroup;
  uploadForm: FormGroup;
  constructor(private allservice: ApiServicesService, public fb: FormBuilder, public router: Router,private modalService: NgbModal) {
    this.datepickerConfig = Object.assign({},
      {
        containerClass: 'theme-red',
        showWeekNumbers: false,
        dateInputFormat: 'DD/MM/YYYY',


      });
  }


  ngOnInit() {
    this.addAwardForm = this.fb.group({
      awardNumber: [''],
      awardDate: [''],
      compensation: [''],
      CALocation: [''],
      CAName: [''],
      sapNo: [''],
      projectName: [''],
      section: [''],
      purposeAcquisition: [''],
      natureAcquisition: [''],
      mouzaCovered: [''],
      awardAmount: [''],
      submittedDate: [''],
    })


    this.paymentForm = this.fb.group({
      paymentMode: [''],
      paymentDate: [''],
      releasedAmount: [''],
      sapNum: [''],
    })
   
    this.approveForm=this.fb.group({
      sap_referenceNo:[''],
      comments:['']
    }) 
    this.rejectForm=this.fb.group({
      comments:['']
    })
    this.fundReleaseForm=this.fb.group({
      paymentMode:[''],
      paymentDate:[''],
      releaseAmount:[''],
      sap_referenceNo:['']
    }) 
    this.createForm=this.fb.group({
      state:[''],
      district:[''],
      taluk:[''],
      village:[''],
      //document:['']
    })
    this.uploadForm=this.fb.group({
      state:[''],
      district:[''],
      taluk:[''],
      village:[''],
      //document:['']
    })
   

   
   
   
      
      
    
    
  }


  approvalModel(content) {
    
    this.modalService.open(content, { centered: true });
  }
  rejectModel(content1) {
    
    this.modalService.open(content1, { centered: true });
  }
  fundReleaseModel(content2){
    this.modalService.open(content2, { centered: true });

  }
  rejectCommentsModel(content3){
    this.modalService.open(content3, { centered: true });

  }
  approvalCommentsModel(content4) {
    this.modalService.open(content4, { centered: true });

  }
  paymentDetailsModel(content5) {
    this.modalService.open(content5, { centered: true });

  }
  fundDetailsModel(content6) {
    this.modalService.open(content6, { centered: true });

  }
  createModel(content7) {
    this.modalService.open(content7, { centered: true,size:'lg' });

  }
uploadModel(content8) {
    this.modalService.open(content8, { centered: true ,size:'lg'});

  }


}

