import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stale-cheque-list',
  templateUrl: './stale-cheque-list.component.html',
  styleUrls: ['./stale-cheque-list.component.css']
})
export class StaleChequeListComponent implements OnInit {

  constructor() { }

  userdetails: any[] = [
    {


      beneficiaryname: 'Sekhar',
      surveyNo: '359',
      chequeNo: '24434545456656',
      chequeDate: '25/02/2020',
      subNo:'32435',
      typeofcrop:'wet',
      beneficiaryshare:'75%',
      amount:'700000',
      areainhtr:'2'

    },
    {


      beneficiaryname: 'Ravi',
      surveyNo: '589',
      chequeNo: '54665577657',
      chequeDate: '20/03/2020',
      subNo:'65656',
      typeofcrop:'wet',
      beneficiaryshare:'55%',
      amount:'550000',
      areainhtr:'1'

    },
    {


      beneficiaryname: 'Kumar',
      surveyNo: '455',
      chequeNo: '46464566645',
      chequeDate: '15/03/2020',
      subNo:'32435',
      typeofcrop:'wet',
      beneficiaryshare:'25%',
      amount:'50000',
      areainhtr:'3'

    },
    {


      beneficiaryname: 'Raja',
      surveyNo: '123',
      chequeNo: '34465766868',
      chequeDate: '02/03/2020',
      subNo:'32435',
      typeofcrop:'wet',
      beneficiaryshare:'38%',
      amount:'480000',
      areainhtr:'2'
      
    },
    {


      beneficiaryname: 'Alekhya',
      surveyNo: '566',
      chequeNo: '345345345343',
      chequeDate: '25/02/2020',
      subNo:'32435',
      typeofcrop:'wet',
      beneficiaryshare:'45%',
      amount:'660000',
      areainhtr:'1'

    },
    {


      beneficiaryname: 'Sabarish',
      surveyNo: '778',
      chequeNo: '235545656567',
      chequeDate: '29/02/2020',
      subNo:'32435',
      typeofcrop:'wet',
      beneficiaryshare:'35%',
      amount:'35000',
      areainhtr:'1'

    },
    {


      beneficiaryname: 'Ram',
      surveyNo: '359',
      chequeNo: '24434545456656',
      chequeDate: '25/02/2020',
      subNo:'32435',
      typeofcrop:'wet',
      beneficiaryshare:'45%',
      amount:'600000',
      areainhtr:'2'

    },
    {


      beneficiaryname: 'Latha',
      surveyNo: '456',
      subNo:'4567',
      typeofcrop:'dry',
      beneficiaryshare:'20%',
      amount:'45000',
      areainhtr:'3',
      chequeNo: '45645645645',
      chequeDate: '30/03/2020'
    },

  ]

  ngOnInit() {
  }

}
