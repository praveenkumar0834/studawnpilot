import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { ChequeService } from '../../services/cheque.service';
@Component({
  selector: 'app-manage-cheque-book',
  templateUrl: './manage-cheque-book.component.html',
  styleUrls: ['./manage-cheque-book.component.css']
})
export class ManageChequeBookComponent implements OnInit {
  loginusrDetails: any;
  chequelist: any;
  totalCount: any;

  constructor(private spinner: NgxSpinnerService,private chequelistService:ChequeService) { }

  ngOnInit() {
    this.loginusrDetails = JSON.parse(localStorage.getItem('loginusrDtls'));
    this.chequeList('')
  }

chequeList(searchtext){
  this.spinner.show();
    let obj = {
      "page": 0,
      "size": 10,
      "regionId": this.loginusrDetails.regionId,
      "keyword": searchtext,
      "sortBy": "chequeBookId"
    }
    this.chequelistService.getChequelistDtls(obj).subscribe(data => {
      this.spinner.hide();
      this.chequelist = data.response
      this.totalCount = data.totalCount;
      // alert(JSON.stringify(this.chequelist))
    })
}
paginate(event) {
  //console.log(event);
  this.spinner.show();
  let obj = {
    "page": event.page,
    "size": event.rows,
    "regionId": this.loginusrDetails.regionId,
    "keyword": '',
    "sortBy": "chequeBookId"
  }
  this.chequelistService.getChequelistDtls(obj).subscribe(data => {
    this.spinner.hide();
    this.chequelist = data.response;
    this.totalCount = data.totalCount;
    // alert(JSON.stringify(this.userList))
  })
}
}
