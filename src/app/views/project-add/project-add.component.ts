import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { ApiServicesService } from '../../services/api-services.service';
import { Manageproject } from '../../domain/manageproject';
import { RowService } from '../../services/row.service';
import { SelectItem, MessageService } from 'primeng/api';
import { CaofficeService } from '../../services/caoffice.service';
import { AddProjectService } from '../../services/add-project.service';
import { DatePipe } from '@angular/common';
import { NgxSpinnerService } from "ngx-spinner";
import swal from 'sweetalert2';
@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css']
})
export class ProjectAddComponent implements OnInit {
  myDatePickerOptions: { dateFormat: any; editableDateField: boolean; openSelectorOnInputClick: boolean; };

  selectedcaoffices=[]
  datepickerConfig: Partial<BsDatepickerConfig>;
  manageProject = new Manageproject
  loginusrDetails: any;
  rowList: any;
  caofficeList = [];
  calist=[];
  caListArray=[];
  project: any;
  items: any[];
  pageTitle: string;
  addbtnFlag: boolean;
  getcaoffices;
  caofficesList=[];
  getcaofficesval;
  editproject: any;
  msg: any;
  
  constructor(private rowservice: RowService, private datepipe: DatePipe,private spinner: NgxSpinnerService,
     private addprojectService:AddProjectService,
     private messageService: MessageService,private activatedRoute: ActivatedRoute, private caofficeService: CaofficeService,public router: Router) {
    // this.datepickerConfig = Object.assign({},
    //   {
    //     containerClass: 'theme-red',
    //     showWeekNumbers: false,
    //     dateInputFormat: 'YYYY-MM-DD', 


    //   });

    this.myDatePickerOptions = {
      dateFormat: 'yyyy-mm-dd',
      editableDateField: false,
      openSelectorOnInputClick: true,
      // disableUntil: { year: year, month: month, day: day }
    };

      
  }
  
  
  ngOnInit() {
   
    this.loginusrDetails = JSON.parse(localStorage.getItem('loginusrDtls'));
    this.getCAList();
    this.activatedRoute.params.subscribe((params: Params) => {
      if (params.projectID) {
        this.pageTitle = 'Edit Project'
        this.addbtnFlag = false;
        this.getProjectdetailsById(params.projectID)

      } else { 
        this.pageTitle = 'Add Project'
        this.addbtnFlag = true;
        this.initialData();
      }
    });

    this.rowservice.getprojectROWList().subscribe(data => {
      this.rowList = data.response
    })

   
  }
  initialData() {
    this.manageProject.row = "";
    this.manageProject.region = this.loginusrDetails.regionId
  }

  addProject(status){
    
    if (status) {
      this.spinner.show();
    this.caListArray = [];
     this.selectedcaoffices.forEach(element => {
        this.caListArray.push(element.caOfficeId)
        console.log(this.caListArray)
      });

  this.manageProject.approvalDate=this.manageProject.approvalDate.formatted;
    this.manageProject.scheduleCompletionDate=this.manageProject.scheduleCompletionDate.formatted;
    this.manageProject.caOffices=  this.caListArray;
    this.manageProject.createdBy = this.loginusrDetails.userId;

    this.addprojectService.addProject(this.manageProject).subscribe(data=>{
      this.spinner.hide();
      this.project=data
      if (data.status =="error") {
        this.msg = data.error_message
        this.openErrorCancelSwal(this.msg);
        setTimeout(() => {
        }, 3000)
      } else {
        this.msg = data.response
        this.openSuccessSwal(this.msg);
        setTimeout(() => {
          this.router.navigate(['manage-projects'])
        }, 3000)

      }
    }
    ,error=>{
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
  
  updateProject(status){
    
    if (status) {
      this.spinner.show();
      this.caListArray = [];
     this.selectedcaoffices.forEach(element => {
        this.caListArray.push(element.caOfficeId)
        console.log(this.caListArray)
      });
    this.manageProject.updatedBy=this.loginusrDetails.userId
    this.manageProject.approvalDate=this.manageProject.approvalDate.formatted;
    this.manageProject.scheduleCompletionDate=this.manageProject.scheduleCompletionDate.formatted;
    this.manageProject.caOffices=  this.caListArray;
    this.addprojectService.editProject(this.manageProject).subscribe(data=>{
      this.spinner.hide();
      this.editproject=data
      if (data.status =="error") {
        this.msg = data.error_message
        this.openErrorCancelSwal(this.msg);
        setTimeout(() => {
        }, 3000)
      } else {
        this.msg = data.response
        this.openSuccessSwal(this.msg);
        setTimeout(() => {
          this.router.navigate(['manage-projects'])
        }, 3000)

      }
    }
    ,error=>{
      this.spinner.hide();
      })
  }
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
  getProjectdetailsById(projectId) {
    this.spinner.show();

       this.addprojectService.getProjectdetailsById(projectId).subscribe(data => {
        this.spinner.hide();
       this.manageProject = data.response;
       this.manageProject.approvalDate = this.formatDate(data.response.approvalDate);
       this.manageProject.scheduleCompletionDate=this.formatDate(data.response.scheduleCompletionDate);
       console.log(this.manageProject.scheduleCompletionDate);
       
       
      
       this.selectedcaoffices = this.converobj(data.response.caOffices);    
       console.log("good")  
       console.log(this.selectedcaoffices)
    })
  }

  formatDate(startDate: any): any {
    // Set today date using the patchValue function
    if (startDate !== undefined && startDate != null) {
      const date = new Date(startDate.replace(/-/g, ' '));
      const latest_date = this.datepipe.transform(date, 'yyyy-MM-dd');
      const startDt = {
        date: {
          year: date.getFullYear(),
          month: date.getMonth() + 1,
          day: date.getDate()
        },
        formatted: latest_date
      };

      return startDt;
    }
    return null;
  }

  converobj(caOfficesObjList) {
    console.log(this.caofficeList)
    let objectList = []
    if(caOfficesObjList !== null && caOfficesObjList !==  undefined && caOfficesObjList !== '') {
      for(let i=0 ; i< caOfficesObjList.length; i++) {
        console.log(caOfficesObjList[i])
        let objt = this.caofficeList.find(item => item.caOfficeId == caOfficesObjList[i])
        objectList.push(objt)
      }
    } 
    return objectList;
   
    
  }
  alertmessage(severity_msg, summary_type, msg) {
    this.messageService.clear();
    this.messageService.add({ severity: severity_msg, summary: summary_type, detail: msg,life:10000 });
  }







  cancel() {
    this.router.navigate(['/manage-projects']);
  }
}


