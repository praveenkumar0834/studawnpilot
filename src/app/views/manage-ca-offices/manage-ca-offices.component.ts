import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServicesService } from '../../services/api-services.service';
import { CaOfficeListService } from '../../services/ca-office-list.service';
import { CAOfficeDetails } from '../../domain/caOffice';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-manage-ca-offices',
  templateUrl: './manage-ca-offices.component.html',
  styleUrls: ['./manage-ca-offices.component.css']
})
export class ManageCaOfficesComponent implements OnInit {
  caList: any;
  loginusrDetails: any;
  caOfficeDtls = new CAOfficeDetails();
  regionId: any;
  totalCount: any;
  defaultPage: number;
  defaultSize: any;
  listData: any[];
  isSearch: number;
  searchtext;
  constructor(private calistservice: CaOfficeListService,private spinner: NgxSpinnerService, public fb: FormBuilder, public router: Router) { }


  ngOnInit() {
    
    this.loginusrDetails = JSON.parse(localStorage.getItem('loginusrDtls'));
    this.regionId= this.loginusrDetails.regionId;
    //this.caOfficeDtls.createdBy = this.loginusrDetails.createdBy;
    

  this.list('')
  // this.spinner.show();
 
  //   setTimeout(() => {
     
  //     this.spinner.hide();
  //   }, 500);

  }

  
  paginate(event){
    this.spinner.show();
    let obj1 = {
      "page": event.page,
      "size": event.rows,
      "keywords": '',
      "sortBy": "caName",
      "regionId": this.regionId
    }
    this.calistservice.CAOfficeList(obj1).subscribe(data => {
      this.spinner.hide();
      this.caList = data.response.list;
      this.totalCount=data.response.count;
    })
    
  }
  list(searchtext){
    this.spinner.show();
    let obj = {
      "page": 0,
      "size": 10,
      "keywords": searchtext,
      "sortBy": "createdBy",
      "regionId": this.regionId
    }

    this.calistservice.CAOfficeList(obj).subscribe(data => {
      this.spinner.hide();
      this.caList = data.response.list;

      this.totalCount=data.response.count;
    })
  }
}
