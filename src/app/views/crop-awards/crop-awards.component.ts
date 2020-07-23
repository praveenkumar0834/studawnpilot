import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServicesService } from '../../services/api-services.service';

@Component({
  selector: 'app-crop-awards',
  templateUrl: './crop-awards.component.html',
  styleUrls: ['./crop-awards.component.css']
})
export class CropAwardsComponent implements OnInit {

  constructor(private allservice: ApiServicesService, public fb: FormBuilder, public router: Router) { }
  awardList:any[]=[
    {
    awardNumber:"1452",
    awardDate:"17/03/2020",
    locationOfCA:"Chennai",
    CAName:"Chennai",
    nameOfProject:"Paradip-Haldia-Durgapur-LPG Pipeline Project	",
    sapNo:"35652223",
    section:"Haldia to Durgapur",
    totalAwardAmount:"1000000",
    submittedDate:"17/03/2020",
    Status:"Active"
  },
  {
    awardNumber:"2365",
    awardDate:"17/03/2020",
    locationOfCA:"Chennai",
    CAName:"Bangolore",
    nameOfProject:"Paradip-Haldia-Durgapur-LPG Pipeline Project	",
    sapNo:"35652223",
    section:"Haldia to Durgapur",
    totalAwardAmount:"250000",
    submittedDate:"17/03/2020",
    Status:"Pending"
  },
  {
    awardNumber:"3549",
    awardDate:"17/03/2020",
    locationOfCA:"Chennai",
    CAName:"Chennai",
    nameOfProject:"Paradip-Haldia-Durgapur-LPG Pipeline Project	",
    sapNo:"35652223",
    section:"Haldia to Durgapur",
    totalAwardAmount:"500000",
    submittedDate:"17/03/2020",
    Status:"Approved"
  }
  ]
  ngOnInit() {
  }

}
