
import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { throwError as _throw } from 'rxjs';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  headers: any;
  options: any;
  constructor(public http: HttpClient) { 
      this.headers = new HttpHeaders({
      // "Authorization": "Basic " + btoa(environment.btoaUsername + ":" + environment.btoaPassword ),
      "Content-Type": "Application/json"
    });
    this.options = {   
      headers:  this.headers
   }
  }


  getLoginUserDtls(data) {
    const url = environment.baseURL + `authenticate`;
    return this.http.post(url,data,this.options).pipe(map((response: any) => response));
  }

    
}
