import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-undisbursed-beneficiary-list',
  templateUrl: './undisbursed-beneficiary-list.component.html',
  styleUrls: ['./undisbursed-beneficiary-list.component.css']
})
export class UndisbursedBeneficiaryListComponent implements OnInit {

  userdetails: any[] = [
    {

      state: 'Tamilnadu',
      district: 'Chennai',
      taluk: 'Tiruvallur',
      village: 'karapakkam',
      beneficiaryname: 'Sekhar',
      surveyNo: '359',
      chequeNo: '24434545456656',
      chequeDate: '25/02/2020',
      subNo: '32435',
      typeofcrop: 'wet',
      beneficiaryshare: '75%',
      amount: '700000',
      areainhtr: '2'

    },
    {

      state: 'Karnataka',
      district: 'Bangalore',
      taluk: 'Marthalli',
      village: 'Kundanahalli',
      beneficiaryname: 'Ravi',
      surveyNo: '589',
      chequeNo: '54665577657',
      chequeDate: '20/03/2020',
      subNo: '65656',
      typeofcrop: 'wet',
      beneficiaryshare: '55%',
      amount: '550000',
      areainhtr: '1'

    },
    {

      state: 'Andhra Pradesh',
      district: 'Nellore',
      taluk: 'Venkatagiri',
      village: 'Venkatampalli',
      beneficiaryname: 'Kumar',
      surveyNo: '455',
      chequeNo: '46464566645',
      chequeDate: '15/03/2020',
      subNo: '32435',
      typeofcrop: 'wet',
      beneficiaryshare: '25%',
      amount: '50000',
      areainhtr: '3'

    },
    {

      state: 'Maharastra',
      district: 'Ahmadnagar',
      taluk: 'Kankavli',
      village: 'Nashik',
      beneficiaryname: 'Raja',
      surveyNo: '123',
      chequeNo: '34465766868',
      chequeDate: '02/03/2020',
      subNo: '32435',
      typeofcrop: 'wet',
      beneficiaryshare: '38%',
      amount: '480000',
      areainhtr: '2'

    },
    {

      state: 'Tamilnadu',
      district: 'Chennai',
      taluk: 'Tiruvallur',
      village: 'karapakkam',
      beneficiaryname: 'Alekhya',
      surveyNo: '566',
      chequeNo: '345345345343',
      chequeDate: '25/02/2020',
      subNo: '32435',
      typeofcrop: 'wet',
      beneficiaryshare: '45%',
      amount: '660000',
      areainhtr: '1'

    },
    {

      state: 'Karnataka',
      district: 'Bangalore',
      taluk: 'Marthalli',
      village: 'Kundanahalli',
      beneficiaryname: 'Sabarish',
      surveyNo: '778',
      chequeNo: '235545656567',
      chequeDate: '29/02/2020',
      subNo: '32435',
      typeofcrop: 'wet',
      beneficiaryshare: '35%',
      amount: '35000',
      areainhtr: '1'

    },
    {

      state: 'Andhra Pradesh',
      district: 'Nellore',
      taluk: 'Venkatagiri',
      village: 'Venkatampalli',
      beneficiaryname: 'Ram',
      surveyNo: '359',
      chequeNo: '24434545456656',
      chequeDate: '25/02/2020',
      subNo: '32435',
      typeofcrop: 'wet',
      beneficiaryshare: '45%',
      amount: '600000',
      areainhtr: '2'

    },
    {

      state: 'Maharastra',
      district: 'Ahmadnagar',
      taluk: 'Kankavli',
      village: 'Nashik',
      beneficiaryname: 'Latha',
      surveyNo: '456',
      subNo: '4567',
      typeofcrop: 'dry',
      beneficiaryshare: '20%',
      amount: '45000',
      areainhtr: '3'

    },

  ]
  constructor() { }

  ngOnInit() {
  }

}

