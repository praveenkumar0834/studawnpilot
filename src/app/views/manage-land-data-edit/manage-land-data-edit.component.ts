import { Component, OnInit } from '@angular/core';
import { LandDataAddDtls } from '../../domain/manage-land-data-add';

@Component({
  selector: 'app-manage-land-data-edit',
  templateUrl: './manage-land-data-edit.component.html',
  styleUrls: ['./manage-land-data-edit.component.css']
})
export class ManageLandDataEditComponent implements OnInit {

  constructor() { }
  landDataAddDtls=new LandDataAddDtls()

  ngOnInit() {
  }

}
