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
export class VillageService {
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
  
  getVillageadd(data){
    const url = environment.baseURL + `village/save`;
    return this.http.post(url,data,this.options).pipe(map((response: any) => response));
  }
  getVillageedit(data){
    const url = environment.baseURL + `village/update`;
    return this.http.post(url,data,this.options).pipe(map((response: any) => response));
  }
  getVillageview(data){
    const url = environment.baseURL + `village/getVillageDetailById`;
    return this.http.post(url,data,this.options).pipe(map((response: any) => response));
  }
  getVillagebasedTaluk(talukId){
    const url = environment.baseURL + `talukBasedOnVillageList`;
    const data = {talukId}
    return this.http.post(url,data,this.options).pipe(map((response: any) => response));

  }
}
