import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse, HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';
import { map } from "rxjs/operators";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {

  constructor(public http: HttpClient) { } 

  // baseURL = environment.baseURL;
  // btoaUsername = environment.btoaUsername;
  // btoaPassword = environment.btoaPassword;

  // geturl(url) {
  //   let headers = new HttpHeaders({
  //     "Authorization": "Basic " + btoa(this.btoaUsername + ":" + this.btoaPassword),
  //     "Content-Type": "Application/json"
  //   });
  //   let options = {   
  //     headers: headers
  //  }

  //   return this.http.get(this.baseURL + url, options).pipe(map((response: any) => response));

  // }


  // posturl(url, food) {
  //   let headers = new HttpHeaders({
  //     "Authorization": "Basic " + btoa(this.btoaUsername + ":" + this.btoaPassword),
  //     "Content-Type": "Application/json"
  //   });
  //   let options = {
  //     headers: headers
  //  }
  //   // let options = new RequestOptions({ headers: headers });
  //   let body = JSON.stringify(food);
  //   //alert(body);
 
  //   return this.http.post(this.baseURL + url, body, options).pipe(map((response: any) => response));
  // }

}
