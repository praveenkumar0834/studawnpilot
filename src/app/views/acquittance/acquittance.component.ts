import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-acquittance',
  templateUrl: './acquittance.component.html',
  styleUrls: ['./acquittance.component.css']
})
export class AcquittanceComponent implements OnInit {
  acquittanceForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.acquittanceForm = this.fb.group({
      state: [''],
      district: [''],
      taluk: [''],
      village: ['']
    })
  }

}
