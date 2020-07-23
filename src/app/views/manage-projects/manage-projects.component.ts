import { Component, OnInit } from '@angular/core';
import { ProjectListService } from '../../services/project-list.service';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-manage-projects',
  templateUrl: './manage-projects.component.html',
  styleUrls: ['./manage-projects.component.css']
})
export class ManageProjectsComponent implements OnInit {
  loginusrDetails: any;
  projectList: any;
  totalCount: any;
  searchtext;
  constructor(private projectListService:ProjectListService,private spinner: NgxSpinnerService) { } 

  ngOnInit() {
    this.loginusrDetails = JSON.parse(localStorage.getItem('loginusrDtls'));
this.list('')


 
    

  }
  paginate(event) {
    this.spinner.show();
    let obj = {
      "page": event.page,
      "size": event.rows,
      "regionId": this.loginusrDetails.regionId,
      "keyword": '',
      "sortBy": "projectName"
    }
    this.projectListService.projectList(obj).subscribe(data => {
      this.spinner.hide();
      this.projectList = data.response;
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
      "keyword": searchtext,
      "sortBy": "projectName"
    }
    this.projectListService.projectList(obj).subscribe(data => {
      this.spinner.hide();
      this.projectList = data.response
      this.totalCount = data.totalCount;
    })
  }
}
