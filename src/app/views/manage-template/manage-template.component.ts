import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {  FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {ModalDirective} from 'ngx-bootstrap/modal';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { ApiServicesService } from '../../services/api-services.service';
@Component({
  selector: 'app-manage-template',
  templateUrl: './manage-template.component.html',
  styleUrls: ['./manage-template.component.css']
})
export class ManageTemplateComponent implements OnInit {
  @ViewChild('myModal') public myModal: ModalDirective;
  paymentForm: FormGroup;
  
  constructor(private allservice: ApiServicesService, public fb: FormBuilder, public router: Router) { }
  templateList:any[]=[
    {
      templateName:'Land compensation award',
      projectName:'Paradip-Haldia-Durgapur-LPG Pipeline Project',
      uploadedDate:'20/03/2020'
    },
    {
      templateName:'Crop compensation award',
      projectName:'Paradip-Haldia-Durgapur-LPG Pipeline Project',
      uploadedDate:'20/03/2020'
    },
    
  ]
  ngOnInit() {
    this.paymentForm = this.fb.group({
      templateName:[''],
      projectName:[''],
    })
  }

}
