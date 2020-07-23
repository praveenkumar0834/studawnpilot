import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ApiServicesService } from '../../services/api-services.service';
import { AdduserService } from '../../services/adduser.service';
import { MessageService } from 'primeng/api';
import { matchingPasswords } from '../../domain/MatchingPasswords';
import { ChangepasswordService } from '../../services/changepassword.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  profileForm: FormGroup;
  keykjm: any;
  changepasswordListUrl: string = "matrix/changePassword";
  profileListUrl: string = "matrix/profileData";
  changepasslist: any;
  profilelist: any;
  profilename: any;
  profilecompany: any;
  profilemobile: any;
  profileemail: any;
  loginusrDetails: any;
  adduserDtls: any;

  constructor(private allservice: ApiServicesService,private changepasswordService:ChangepasswordService,private messageService: MessageService,private activatedRoute: ActivatedRoute,private adduserService:AdduserService,public fb: FormBuilder,public router: Router) { 
  }
  ngOnInit() {
    this.loginusrDetails = JSON.parse(localStorage.getItem('loginusrDtls'));
  
    this.getUserdetailsById(this.loginusrDetails.userId)
    this.profileForm = this.fb.group({
      
      oldPassword: ['',[Validators.required]],    
      
      password: ['', [Validators.required]],
      confpassword:['', [Validators.required]],
    },
    { validator: matchingPasswords("password", "confpassword") }
    )
   
  }
  get f() {
    return this.profileForm.controls;
  }
  Changepassword(x) {
    let obj2 = {
      "currentPassword": x.oldPassword,
      "newPassword":x.confpassword,
      "userId":this.loginusrDetails.userId
    }
    this.changepasswordService.getChangePasswordDtls(obj2).subscribe(data => {
      if (data.error_message !== null && data.error_message !== undefined) {
        // alert(data.error);
        this.alertmessage('error', 'Error', data.error_message)
      } else {
          // this.clearForm();
         
          this.alertmessage('success', 'Success', 'Password Updated Successfully');
         
         setTimeout(()=>{
            this.router.navigate(['manage-users'])
        },3000)

      }
     
    })
  }
  getUserdetailsById(userId) {

    this.adduserService.getUserdetailsById(userId).subscribe(data => {
      // alert(JSON.stringify(data));
      this.adduserDtls = data.response;
     
      // this.locationval = this.converobj(this.adduserDtls.location);

      // console.log("welcome")
      // console.log(this.locationval)
    })
  }
  alertmessage(severity_msg, summary_type, msg) {
    this.messageService.clear();
    this.messageService.add({ severity: severity_msg, summary: summary_type, detail: msg,life:10000 });
  }

}
