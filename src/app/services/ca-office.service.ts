import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CaOfficeService {
  headers:any;
  options: any;

  constructor(public http: HttpClient) {
    this.headers = new HttpHeaders({
      "Authorization":`Bearer ${JSON.parse(localStorage.getItem('token'))}` ,
      "Content-Type": "Application/json"
    });
    this.options = {   
      headers:  this.headers
   }
   }

   

   addCAOffice(data){
     const url=environment.baseURL+'caOffice/save';
     return this.http.post(url,data,this.options).pipe(map((response:any)=>response))
   }
   getCaofficedetailsById(caOfficeId) {
    const data = { caOfficeId }
    const url = environment.baseURL + `caOffice/view`;
    return this.http.post(url,data,this.options).pipe(map((response: any) => response));
  }
  updateCAOffice(data){
    const url=environment.baseURL+'caOffice/update';
    return this.http.post(url,data,this.options).pipe(map((response:any)=>response))
  }
}
