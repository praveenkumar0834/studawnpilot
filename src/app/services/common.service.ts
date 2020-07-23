import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(public http: HttpClient) { }


  // getSellerProductsList(object: any) {
	// 	return this.http.post<any>(
	// 		`${environment.apiUrl}/customer/productListBasedOnSellerId`,
	// 		object
	// 	);
  // }
  
  

}
