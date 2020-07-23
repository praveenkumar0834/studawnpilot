import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-award-reconcilation',
  templateUrl: './award-reconcilation.component.html',
  styleUrls: ['./award-reconcilation.component.css']
})
export class AwardReconcilationComponent implements OnInit {
  reconciliationreport: any[] = [
    {
     
      CAname:'Ram',
      Award:'1',
      Chequenumber:'145234',
      Chequedate:'20/10/2019',
      Issuedto:'latharani',
      Chequeamount:'10999',
      Status:'Matched',
      Date:'22/10/2019',
      Chequenumber1:'145234',
      Amount:'10999',
      Remarks:'Verified'

    },
    {
     
      CAname:'Ram',
      Award:'2',
      Chequenumber:'145234',
      Chequedate:'20/10/2019',
      Issuedto:'Kalai',
      Chequeamount:'10999',
      Status:'Unmatched',
      Date:'',
      Chequenumber1:'',
      Amount:'',
      Remarks:'Not available in bank statement'

    },
    {
     
      CAname:'Ram',
      Award:'3',
      Chequenumber:'145264',
      Chequedate:'20/10/2019',
      Issuedto:'Kavi',
      Chequeamount:'10999',
      Status:'Matched',
      Date:'22/10/2019',
      Chequenumber1:'145264',
      Amount:'10999',
      Remarks:'Verified'

    },
    {
     
      CAname:'Ram',
      Award:'4',
      Chequenumber:'145234',
      Chequedate:'20/10/2019',
      Issuedto:'latharani',
      Chequeamount:'10999',
      Status:'Unmatched',
      Date:'22/10/2019',
      Chequenumber1:'145234',
      Amount:'109996',
      Remarks:'Amount not matching'

    },
    {
     
      CAname:'Ram',
      Award:'5',
      Chequenumber:'',
      Chequedate:'',
      Issuedto:'Arun',
      Chequeamount:'',
      Status:'Unmatched',
      Date:'22/10/2019',
      Chequenumber1:'145234',
      Amount:'10999',
      Remarks:'Not available in system data'

    },
    {
     
      CAname:'Ram',
      Award:'6',
      Chequenumber:'145234',
      Chequedate:'20/10/2019',
      Issuedto:'Abi',
      Chequeamount:'876478',
      Status:'Matched',
      Date:'22/10/2019',
      Chequenumber1:'145234',
      Amount:'876478',
      Remarks:'Verified'

    },
    {
     
      CAname:'Ram',
      Award:'7',
      Chequenumber:'989787',
      Chequedate:'20/10/2019',
      Issuedto:'Kavitha',
      Chequeamount:'10999',
      Status:'Matched',
      Date:'22/10/2019',
      Chequenumber1:'145234',
      Amount:'989787',
      Remarks:'Verified'

    },
    {
     
      CAname:'Ram',
      Award:'8',
      Chequenumber:'145234',
      Chequedate:'20/10/2019',
      Issuedto:'Bala',
      Chequeamount:'45656',
      Status:'Matched',
      Date:'22/10/2019',
      Chequenumber1:'145234',
      Amount:'45656',
      Remarks:'Verified'

    },
   
  ]


  constructor() { }

  ngOnInit() {
  }

}
