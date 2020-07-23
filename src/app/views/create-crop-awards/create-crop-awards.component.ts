import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, Validators, FormControl } from '@angular/forms'; 
import { Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {  IDropdownSettings } from 'ng-multiselect-dropdown';
import { ApiServicesService } from '../../services/api-services.service';

@Component({
  selector: 'app-create-crop-awards',
  templateUrl: './create-crop-awards.component.html',
  styleUrls: ['./create-crop-awards.component.css']
})
export class CreateCropAwardsComponent implements OnInit {

  dropdownList = [];
  selectedItems = [];
  dropdownSettings:IDropdownSettings;

  addAwardForm: FormGroup;
  tableForm: FormGroup;
  paymentForm: FormGroup;
  createForm: FormGroup;
  uploadForm: FormGroup;
  constructor(private allservice: ApiServicesService, public fb: FormBuilder, public router: Router,private modalService: NgbModal) { }
  @ViewChild('myModal') public myModal: ModalDirective;
  isShown: boolean = false;
  ngOnInit() {

    this.dropdownList = [
      { item_id: 1, item_text: 'Kavanur' },
      { item_id: 2, item_text: 'Anandavadi' },
      { item_id: 3, item_text: 'Sennivanam' },
      { item_id: 4, item_text: 'Kodukkur' },
      { item_id: 5, item_text: 'Booluvampatti' },
      { item_id: 5, item_text: 'Navamalai' }
    ];
    this.selectedItems = [
      { item_id: 3, item_text: 'Sennivanamne' },
      { item_id: 4, item_text: 'NavKodukkursari' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };


    this.addAwardForm = this.fb.group({
      awardNumber: [''],
      awardDate: [''],
      compensation: [''],
      caName:[''],
      section: [''],
      sapNo: [''],
      projectName: [''],
      purposeAcquisition: [''],
      natureAcquisition: [''],
      mouzaCovered: [''],
      awardAmount: [''],
      submittedDate: [''],
      awardTemplate:[''],
      state: [''],
      district: [''],
      taluk: [''],
      village: [''],
     
      credentials: this.fb.array([]),
    })

   
    this.createForm=this.fb.group({
      state:[''],
      district:[''],
      taluk:[''],
      village:[''],
      document:['']
    })
    this.uploadForm=this.fb.group({
      state:[''],
      district:[''],
      taluk:[''],
      village:[''],
      document:['']
    })
  }
  addCreds() {
    const creds = this.addAwardForm.controls.credentials as FormArray;
    creds.push(this.fb.group({
      state: [''],
      district: [''],
      taluk: [''],
      village: [''],
      surveyNo: [''],
      subdivNo: [''],
      hectare: [''],
      are: [''],
      sqmt: [''],
      toatlArea: [''],
      landType: [''],
      landOwnerName: [''],
      rate: [''],
      totalamount: [''],
      compensation: [''],
      talamountuk: [''],
    }));
  }

  remove(i: number) {
    const creds = this.addAwardForm.controls.credentials as FormArray;
    creds.removeAt(i);
  }
 
  create() {

    this.isShown = !this.isShown;

  }

  cancel() {
    this.router.navigate(['/crop-awards'])
  }

  createModel(content) {
   
    this.modalService.open(content, { centered: true,size:'lg' });
  }
  uploadModel(content1) {
    
    this.modalService.open(content1, { centered: true,size:'lg' });
  }
}
