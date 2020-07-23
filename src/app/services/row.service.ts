import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RowService {

  headers: any;
  options: any;
  
  constructor(public http: HttpClient) { 
    this.headers = new HttpHeaders({
      "Authorization":`Bearer ${JSON.parse(localStorage.getItem('token'))}`,
      "Content-Type": "Application/json"
      
    });
    this.options = {    
      headers:  this.headers
   }
  }
  getprojectROWList() {
    const url = environment.baseURL + `projectROWList`;
    return this.http.get(url,this.options).pipe(map((response: any) => response));
  }

}
