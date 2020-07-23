import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AddProjectService {

  headers: any;
  options: any;
  constructor(public http: HttpClient) {
    this.headers = new HttpHeaders({
      "Content-Type": "Application/json",
      "Authorization":`Bearer ${JSON.parse(localStorage.getItem('token'))}` ,
    });
    
    this.options = {   
      headers:  this.headers
   }
   }

   addProject(data){
    const url = environment.baseURL + `project/save`;
    return this.http.post(url,data,this.options).pipe(map((response: any) => response));
   }
   editProject(data){
    const url = environment.baseURL + `project/update`;
    return this.http.post(url,data,this.options).pipe(map((response: any) => response));
   }
   getProjectdetailsById(projectId) {
    const data = { projectId }
    const url = environment.baseURL + `project/getProjectDetailById`;
    return this.http.post(url,data,this.options).pipe(map((response: any) => response));
  }
}