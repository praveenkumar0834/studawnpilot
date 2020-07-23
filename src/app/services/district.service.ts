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
export class DistrictService {
  headers: any;
  options: any;
  constructor(public http: HttpClient) {
    this.headers = new HttpHeaders({
      // "Authorization": "Basic " + btoa(environment.btoaUsername + ":" + environment.btoaPassword ),
      "Content-Type": "Application/json",
      "Authorization":`Bearer ${JSON.parse(localStorage.getItem('token'))}` ,
     

    });
    
    this.options = {   
      headers:  this.headers
   }
   }
   getDistrictbasedState(stateId) {
    const url = environment.baseURL + `stateBasedOndistrictList`;
    const data = {stateId}
    return this.http.post(url,data,this.options).pipe(map((response: any) => response));
  }
   getDistricteditDtls(data) {
    const url = environment.baseURL + `district/update`;
    return this.http.post(url,data,this.options).pipe(map((response: any) => response));
  }
  getDistrictadd(data){
    const url = environment.baseURL + `district/save`;
    return this.http.post(url,data,this.options).pipe(map((response: any) => response));
  }
  getDistrictbyId(data){
    const url = environment.baseURL + `district/getDistrictDetailById`;
    return this.http.post(url,data,this.options).pipe(map((response: any) => response));
  }
}
