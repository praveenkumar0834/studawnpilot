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
export class ChequeService {
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

  getChequelistDtls(data) {
    const url = environment.baseURL + `chequeBook/getChequeBookDetails`;
    return this.http.post(url,data,this.options).pipe(map((response: any) => response));
  }
  addCheque(data){
    const url = environment.baseURL + `chequeBook/save`;
    return this.http.post(url,data,this.options).pipe(map((response: any) => response));
   }
   getChequedetailsById(chequeBookId) {
    const data = { chequeBookId }
    const url = environment.baseURL + `chequeBook/getChequeBookDetailsById`;
    return this.http.post(url,data,this.options).pipe(map((response: any) => response));
  }
  editCheque(data){
    const url = environment.baseURL + `chequeBook/update`;
    return this.http.post(url,data,this.options).pipe(map((response: any) => response));
   }
}
