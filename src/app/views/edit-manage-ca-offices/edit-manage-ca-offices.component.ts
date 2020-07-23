import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {  FormBuilder, Validators, FormControl } from '@angular/forms';
import { ApiServicesService } from '../../services/api-services.service';

@Component({
  selector: 'app-edit-manage-ca-offices',
  templateUrl: './edit-manage-ca-offices.component.html',
  styleUrls: ['./edit-manage-ca-offices.component.css']
})
export class EditManageCaOfficesComponent implements OnInit {
  EditUserForm:FormGroup;
  constructor(private allservice: ApiServicesService, public fb: FormBuilder, public router: Router) { }

  ngOnInit() {
    this.EditUserForm = this.fb.group({
      name: [''],
      vendorCode: [''],
      notification_no:[''],
      state:[''],
      project:[''],
      location: [''],
      bankAccount: [''],
      bankBranchCode:[''],
      pan: [''],
      emailId:[''],
      contact:['']
    })
  }

}
