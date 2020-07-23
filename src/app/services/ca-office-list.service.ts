import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CaOfficeListService {
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

   

   CAOfficeList(data){
     const url=environment.baseURL+'caOffice/list';
     return this.http.post(url,data,this.options).pipe(map((response:any)=>response))
   }
}
