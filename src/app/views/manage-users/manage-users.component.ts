import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServicesService } from '../../services/api-services.service';
import { AdduserService } from '../../services/adduser.service';
import { UserlistService } from '../../services/userlist.service';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {
  userList: any;
  loginusrDetails: any;
  totalCount;

  searchtext;
  constructor(private allservice: ApiServicesService, private spinner: NgxSpinnerService,private userlistService: UserlistService, public fb: FormBuilder, public router: Router) { }

  ngOnInit() {
    this.loginusrDetails = JSON.parse(localStorage.getItem('loginusrDtls'));

    this.list('');
    
 
    

  }

  paginate(event) {
    //console.log(event);
    this.spinner.show();
    let obj = {
      "page": event.page,
      "size": event.rows,
      "regionId": this.loginusrDetails.regionId,
      "keyword": '',
      "sortBy": "userName"
    }
    this.userlistService.getUserlistDtls(obj).subscribe(data => {
      this.spinner.hide();
      this.userList = data.response;
      this.totalCount = data.totalCount;
      // alert(JSON.stringify(this.userList))
    })
  }

  list(searchtext) {
    this.spinner.show();
    let obj = {
      "page": 0,
      "size": 10,
      "regionId": this.loginusrDetails.regionId,
      "keyword": searchtext,
      "sortBy": "userName"
    }
    this.userlistService.getUserlistDtls(obj).subscribe(data => {
      this.spinner.hide();
      this.userList = data.response
      this.totalCount = data.totalCount;
      // alert(JSON.stringify(this.userList))
    })
  }
}
