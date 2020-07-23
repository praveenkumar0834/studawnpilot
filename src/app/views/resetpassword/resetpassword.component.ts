import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { ApiServicesService } from '../../services/api-services.service';
@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  resetUrl: string = "consumer/password"
  forgotlist: any;
  otp: any;
  userId: any;
  resetlist: { "newPassword": any; "userId": any; "isConsumerLogin": any; };
  resetForm: FormGroup;
  constructor(private fb: FormBuilder,private allservice:ApiServicesService, private router: Router) { }

  ngOnInit() {
    this.userId = JSON.parse(localStorage.getItem("userId"));
    this.resetForm = this.fb.group({
      newPassword: [''],      
      confirmpassword: [''],   
    })
  }
  back()
  {
    this.router.navigate(['/login']);
  }
reset(){
  this.router.navigate(['/login']);
}
  // reset(x)
  // {
  //     x.userId=this.userId;
  //     x.isConsumerLogin=false;
  //     if(x.newPassword==x.confirmpassword)
  //     {
  //     this.resetlist={
  //       "newPassword":x.newPassword,
  //       "userId":x.userId,
  //       "isConsumerLogin":x.isConsumerLogin
  //     }
  //     this.allservice.posturl(this.resetUrl,this.resetlist)
  //     .subscribe(data =>{    
  //     this.forgotlist=data.data;
  //     if(data.data.error_code=="397")
  //   {
  //     alert("Session Timeout");
  //     this.router.navigate(['/login']);
  //   }
  //   if(data.data.error_code=="393")
  //   {
  //     alert("Session Timeout or Inavlid please try again...");
  //     this.router.navigate(['/login']);
  //   }
  //     if( data.status=="success")
  //     {
  //           alert("Password changed successfully...")
  //           localStorage.setItem("userId", JSON.stringify(this.forgotlist.userId));
  //           this.router.navigate(['/login']);
            
  //     }  
  //     });
  //   }
  //   else
  //   {
  //     alert("New Password doesn't match with Confirm Password")
  //   }
  // }

}
