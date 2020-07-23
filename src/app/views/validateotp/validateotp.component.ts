import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServicesService } from '../../services/api-services.service';

@Component({
  selector: 'app-validateotp',
  templateUrl: './validateotp.component.html',
  styleUrls: ['./validateotp.component.css']
})
export class ValidateotpComponent implements OnInit {
  validateForm: FormGroup;
  user_name1: any;
  userId: any;
  validateotplist: { "user_name": any; "otp": any; };
  validateUrl: string = "matrix/otpVerify"
  forgotlist: any;

  constructor(private allservice: ApiServicesService, public fb: FormBuilder, public router: Router) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      otp: ['']

    })
  }
  back() {
    this.router.navigate(['/login']);
  }
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
  validate() {
this.router.navigate(['/resetpassword'])
  }
  // validate(x) {

  //   this.user_name1 = JSON.parse(localStorage.getItem("user_name"));
  //   this.userId = JSON.parse(localStorage.getItem("userId"));

  //   this.validateotplist = {
  //     "user_name": this.user_name1.user_name,
  //     "otp": x.otp
  //   }

  //   this.allservice.posturl(this.validateUrl, this.validateotplist)
  //     .subscribe(data => {
  //       this.forgotlist = data.data;
  //       if (this.forgotlist.error_message == "OTP is wrong try again") {
  //         alert("OTP is wrong try again")
  //         this.router.navigate(['/forgotpassword'])
  //       }
  //       if (this.forgotlist.message == "Otp verified Successfully") {
  //         alert("Otp verified Successfully")
  //         this.router.navigate(['/resetpassword'])
  //       }

  //     });
  // }

}
