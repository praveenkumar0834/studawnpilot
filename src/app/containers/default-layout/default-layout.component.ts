import {Component, OnInit } from '@angular/core';
import { navItems } from '../../_nav';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ApiServicesService } from '../../services/api-services.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnInit {
  public sidebarMinimized = false;
  public navItems = navItems;
  name: any;
  session: any;

  Message: any;
  keykjm: any;
  logoutUrl: string =  "matrix/logout"
  loginusrDetails: any;

  constructor(private fb: FormBuilder,private allservice:ApiServicesService, private router: Router) { }

  ngOnInit() {
    this.loginusrDetails = JSON.parse(localStorage.getItem('loginusrDtls'));
   // this.name = JSON.parse(localStorage.getItem("name"));
  }
  
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  logout() {
    localStorage.removeItem('loginusrDtls');
    localStorage.clear();
    this.router.navigate(['/login']);

  }
  
}
