import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectListService {

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

   

   projectList(data){
     const url=environment.baseURL+'project/getProjectDetails';
     return this.http.post(url,data,this.options).pipe(map((response:any)=>response))
   }
}
