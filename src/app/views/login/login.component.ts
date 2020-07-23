import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { environment } from '../../../environments/environment';
import { ApiServicesService } from '../../services/api-services.service';
import { LoginDtls } from '../../domain/login';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import {MessageService} from 'primeng/api';
import swal from 'sweetalert2';

// import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

  hideTop: boolean;
  Message: any;
  loginDtls= new LoginDtls()

  year:number=new Date().getFullYear();
  // baseURL = environment.baseURL;
  // companyID = environment.companyid;

  loginUrl: string = "matrix/loginNew"
  message: string;
  keykjm: any;
  logindata: any;
  showErrorMessage: boolean;
  
  constructor(private messageService: MessageService, private loginService: LoginService , private fb: FormBuilder,private allservice:ApiServicesService, private router: Router, private _location: Location) { }
  ngOnInit() {
    // this.loginDtls.password = 'password'
    
  }

login(){
  //this.router.navigate(['\dashboard'])
  
   this.loginService.getLoginUserDtls(this.loginDtls).subscribe(data=>{
     this.logindata=data
    //  alert(JSON.stringify(this.logindata))
    
  this.router.navigate(['/dashboard']);
  localStorage.setItem("loginusrDtls",JSON.stringify(this.logindata.response))
  localStorage.setItem('token', JSON.stringify(data.response.token))
  
    
  },
  error=>{
    console.log(error);
    if (error.status == "401") {
      
        swal.fire({
          icon: 'info',
          title: 'Please Enter Valid Email/Password',
          showConfirmButton: true,
        //  timer: 3500
        })   
    }
    if (error.status == "33") {
      
      swal.fire({
        icon: 'info',
        title: 'Account is Inactive. Please Contact Iocl Office',
        showConfirmButton: true,
       // timer: 3500
      })   
  }
  }
  // ,error=>{
  //   console.log(error);
  //   if (error.status == "401") {
  //        alert('Invalid Credentials, Please try again');
  //        this.alertmessage('error','Error','Please Enter Valid Email/Password')
  //        this.alertmessage('success','Success','Invalid Credentials, Please try again')
  //        this.alertmessage('warn','Warning','Invalid Credentials, Please try again')

        
  //   }
  
  // }
  )

}
alertmessage(severity_msg, summary_type, msg) {
  this.messageService.clear();
  this.messageService.add({ severity: severity_msg, summary: summary_type, detail: msg,life:10000 });
}
  
 }
