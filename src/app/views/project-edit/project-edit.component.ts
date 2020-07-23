import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { ApiServicesService } from '../../services/api-services.service';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {
  datepickerConfig: Partial<BsDatepickerConfig>;

  constructor(private allservice: ApiServicesService, public fb: FormBuilder, public router: Router) {
    this.datepickerConfig = Object.assign({},
      {
        containerClass: 'theme-red',
        showWeekNumbers: false,
        dateInputFormat: 'DD/MM/YYYY',


      });
   }
   projectAddForm: FormGroup;

   ngOnInit() {
     this.projectAddForm = this.fb.group({
       projectName:[''],
       region:[''],
      //state:[''],
      description:[''],
       approvalDate:[''],
       scheduleCompletion:[''],
       row:[''],
       section:[''],
       notification:[''],
       project: this.fb.array([]),
     })
   }
   add() {
     const proj = this.projectAddForm.controls.project as FormArray;
     proj.push(this.fb.group({
     section1:['']
     }));
   }
   remove(i: number) {
     const proj = this.projectAddForm.controls.project as FormArray;
     proj.removeAt(i);
   }
   cancel(){
     this.router.navigate(['/manage-projects']);
   }
 }
 