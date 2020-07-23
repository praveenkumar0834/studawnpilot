import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { ApiServicesService } from '../../services/api-services.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  forgotForm: FormGroup;

  // baseURL = environment.baseURL;
  // companyID = environment.companyid;

  forgotUrl: string ="matrix/forgotPass"
  forgotlist: any;
  constructor(private fb: FormBuilder,private allservice:ApiServicesService, private router: Router) { }

  ngOnInit() {
    this.forgotForm = this.fb.group({
      user_name: ['']

    })

  }
  back() {
    this.router.navigate(['/login']);
  }
  forgotpass(x) {   
    this.router.navigate(['/validateotp'])
  }

  // forgotpass(x) {    
  //   localStorage.setItem("user_name", JSON.stringify(x));
  //   x.company = this.companyID;
   

  //   this.allservice.posturl(this.forgotUrl, x)
  //     .subscribe(data => {
  //       this.forgotlist = data.data;
  //       if (data.data.error_code == "397") {
  //         alert("Session Timeout");
  //         this.router.navigate(['/login']);
  //       }
  //       if (data.data.error_code == "393") {
  //         alert("Session Timeout or Inavlid please try again...");
  //         this.router.navigate(['/login']);
  //       }
  //       if (data.status == "success") {
  //         alert("OTP is sent to your Mobile.Please check now")
  //         localStorage.setItem("userId", JSON.stringify(this.forgotlist.userId));
  //         this.router.navigate(['/validateotp']);
  //       }
  //       if (data.data.error_message == "Invalid UserName!") {
  //         alert("Invalid Email ID")
  //       }
  //     });
  // }

}
