import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ManageLandDataListService {

  options:  any;
  headers: any;

  constructor(public http: HttpClient) {
    this.headers = new HttpHeaders({
      "Authorization":`Bearer ${JSON.parse(localStorage.getItem('token'))}` ,
      "Content-Type": "Application/json"
    });
    this.options = {   
      headers:  this.headers
   }
   }

   

   getLandDataList(data){
     const url=environment.baseURL+'land/getLandDetails';
     return this.http.post(url,data,this.options).pipe(map((response:any)=>response))
   }
}
