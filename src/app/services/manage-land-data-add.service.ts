import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ManageLandDataAddService {

  options:  any;
  headers: any;
  headers1: any;
  options1: any;

  constructor(public http: HttpClient) { 
    this.headers = new HttpHeaders({
      
      "Authorization":`Bearer ${JSON.parse(localStorage.getItem('token'))}` ,
     

    });
    
    this.options = {   
      headers:  this.headers
   }


   this.headers1 = new HttpHeaders({
    "Content-Type": "Application/json",
    "Authorization":`Bearer ${JSON.parse(localStorage.getItem('token'))}` ,
   

  });
  
  this.options1 = {   
    headers:  this.headers1
 }
  }
   
   addLandData(data){
     const url=environment.baseURL+'land/save';
     return this.http.post(url,data,this.options).pipe(map((response:any)=>response))
   }

  updateLandData(data){
    const url=environment.baseURL+'land/update';
    return this.http.post(url,data,this.options).pipe(map((response:any)=>response))
  }

   getUserdetailsById(landGazetteId) {
    const data = { landGazetteId }
    const url = environment.baseURL + `land/getLandDetailsById`;
    return this.http.post(url,data,this.options1).pipe(map((response: any) => response));
  }
}
