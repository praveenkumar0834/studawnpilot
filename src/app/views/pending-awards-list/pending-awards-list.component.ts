import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pending-awards-list',
  templateUrl: './pending-awards-list.component.html',
  styleUrls: ['./pending-awards-list.component.css']
})
export class PendingAwardsListComponent implements OnInit {
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
    Status:"Pending"
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
    Status:"Pending"
  }
  ]
  constructor() { }

  ngOnInit() {
  }

}
