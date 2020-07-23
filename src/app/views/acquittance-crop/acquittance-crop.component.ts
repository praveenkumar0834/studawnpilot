import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-acquittance-crop',
  templateUrl: './acquittance-crop.component.html',
  styleUrls: ['./acquittance-crop.component.css']
})
export class AcquittanceCropComponent implements OnInit {
  acquittanceForm: FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.acquittanceForm = this.fb.group({
      state: [''],
      district: [''],
      taluk: [''],
      village: ['']
    })
  }

}
