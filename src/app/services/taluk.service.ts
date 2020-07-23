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
export class TalukService {
  headers: any;
  options: any;
  constructor(public http: HttpClient) { 
    this.headers = new HttpHeaders({
      // "Authorization": "Basic " + btoa(environment.btoaUsername + ":" + environment.btoaPassword ),
      // "Content-Type": "Application/json",
      "Authorization":`Bearer ${JSON.parse(localStorage.getItem('token'))}` ,
     

    });
    
    this.options = {   
      headers:  this.headers
      
   }
  }
  getTalukadd(data){
    const url = environment.baseURL + `taluk/save`;
    return this.http.post(url,data,this.options).pipe(map((response: any) => response));
  }
  getTalukview(data){
    const url = environment.baseURL + `taluk/getTalukDetailById`;
    return this.http.post(url,data,this.options).pipe(map((response: any) => response));
  }
  getTalukedit(data){
    const url = environment.baseURL + `taluk/update`;
    return this.http.post(url,data,this.options).pipe(map((response: any) => response));
  }
  getTalukbasedDistrict(districtId) {
    const url = environment.baseURL + `districtBasedOnTalukList`;
    const data = {districtId}
    return this.http.post(url,data,this.options).pipe(map((response: any) => response));
  }
}
