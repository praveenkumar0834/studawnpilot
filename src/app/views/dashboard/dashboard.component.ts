import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServicesService } from '../../services/api-services.service';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  dashboardUrl: string = "nikit/dashboard";
  couponsChartUrl: string = "nikit/couponsGraph";
  redemptionChartUrl:string="nikit/redemptionGraphLitaski";
  consumerTrendChartUrl:string="nikit/consumerTrendGraph";
  accrualChartUrl:string="nikit/accuralTrendGraph";
  consumerActivityUrl:string="nikit/consumerActivityDashBoard";
  yearsDropdownUrl: string = "nikit/yearDropDown";
  referralChartUrl:string="nikit/refferalGraph";
  keykjm: any;
  dashboarddata: any;
  couponData: any;
  years: any=[];
  redemptionData: any;
  consumerData: any;
  accrualData: any;
  consumerActivityData: any;
  referralData: any;
  constructor(private allservice: ApiServicesService, public fb: FormBuilder, public router: Router) {
  }
  // lineChart
  public lineChartData: Array<any> = [
    { data: [2500000,2200000,1500000,2300000,5500000,9400000,2500000,3000000,4500000,6700000,8000000,5300000] },

  ];
  public lineChartLabels: Array<any> = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
  public lineChartOptions: any = {
    animation: false,
    responsive: true,
    elements: {
      line: {
        fill: false
      }
    },
    legend: {
      display: false
    }
   
  };

  public lineChartLegend = true;
  public lineChartType = 'line';
  // public lineChartColours: Array<any> = [
  //   {
  //     backgroundColor: 'rgb (255,255,255)',
  //     borderColor: 'rgb(193, 39, 43)',

  //   }
  // ];

  // lineChart1
  public lineChart1Data: Array<any> = [
    { data: [3000000,3300000,2300000,7650000,5500000,9400000,2500000,3000000,4500000,6000000,8000000,5300000] },

  ];
  public lineChart1Labels: Array<any> = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
  public lineChart1Options: any = {
    animation: false,
    responsive: true,
    elements: {
      line: {
        fill: false
      }
    },
    legend: {
      display: false
    }

  };

  public lineChart1Legend = true;
  public lineChart1Type = 'line';
  // public lineChart1Colours: Array<any> = [
  //   {
  //     backgroundColor: 'rgba(236, 83, 83)',
  //   }
  // ];

  // barChart
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    legend: {
      display: false
  },
  };

 
  public barChartLabels: string[] = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData: any[] = [
    { data: [3000000,3300000,2300000,7650000,5500000,9400000,2500000,3000000,4500000,6000000,8000000,5300000],label: 'COMPENSATION' },
    // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];

  public barChartColors: Array<any> = [
    // {
    //   backgroundColor: '#ED402A', 
       

    // },
    {
      backgroundColor: '#36A2EB', 
       

    },
    {
      backgroundColor: '#FFCE56', 
       

    },
    {
      backgroundColor: '#A0B421', 
       

    }
  ];
  

  // barChart1
  public barChart1Options: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    legend: {
      display: false
  },
  };
  public barChart1Labels: string[] = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
  public barChart1Type = 'bar';
  public barChart1Legend = true;

  public barChart1Data: any[] = [
    { data: [2500000,2000000,1000000,6000000,4500000,9400000,8000000,3000000,4500000,6000000,8000000,5300000],label: 'COMPENSATION' },
    
  ];
  public barChart2Colors: Array<any> = [
    

    
    // {
    //   backgroundColor: '#FFCE56', 
       

    // },
    {
      backgroundColor: '#A0B421', 
       

    }
  ];



  // barChart2
  public barChart2Options: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    legend: {
      display: false
  },
  };
  public barChart2Labels: string[] = ['Chennai','Bangalore','Cuddalore','Kanchipuram','Tiruvallur ','Tirunelveli ','Ramanathapuram','Chikkaballapur','Bidar','Raichur','Kodagu','Mysuru'];
  public barChart2Type = 'bar';
  public barChart2Legend = true;

  public barChart2Data: any[] = [
    { data: [2500000,2000000,1000000,6000000,4500000,9400000,8000000,3000000,4500000,6000000,8000000,5300000],label: 'COMPENSATION' },
   
  ];

  // Pie
  public pieChartLabels: string[] =[];
  public pieChartData: number[] = [];
  public pieChartType = 'pie';
  public pieChartColors: Array<any> = [{
    backgroundColor: ['rgba(255, 115, 0)', 'rgba(253, 103, 135)', 'rgb(0, 126, 214)', 'rgb(124, 221, 221)'],
  }];

  ngOnInit() {

    // this.keykjm = JSON.parse(localStorage.getItem("keykjm"));

    // let object = {
    //   "keykjm": this.keykjm
    // }
    // this.allservice.posturl(this.yearsDropdownUrl, object)
    //   .subscribe(data => {
    //     this.years = data.data;
    //     this.callFunction(); 

    //   })

    

  }

  // callFunction(){
  //   let obj = {
  //     "keykjm": this.keykjm
  //   }
  //   this.allservice.posturl(this.dashboardUrl, obj)
  //     .subscribe(data => {
  //       this.dashboarddata = data.data;
  //       if (data.data.error_code == "397") {
  //         alert("Session Timeout");
  //         this.router.navigate(['/login']);
  //       }
  //       if (data.data.error_code == "393") {
  //         alert("Session Timeout or Inavlid please try again...");
  //         this.router.navigate(['/login']);
  //       }
  //     })

  //   let obj1 = {
  //     "date":(this.years.length > 0)?this.years[0].year:5555,
  //     "keykjm": this.keykjm
  //   }
  //   this.allservice.posturl(this.couponsChartUrl, obj1)
  //     .subscribe(data => {
  //       this.couponData = data.data;
  //       this.pieChartLabels = this.couponData.adminPieLable as string[];
  //       this.pieChartData = this.couponData.adminPieData as number[];
        
  //       // if (data.data.error_code == "397") {
  //       //   alert("Session Timeout");
  //       //   this.router.navigate(['/login']);
  //       // }
  //       // if (data.data.error_code == "393") {
  //       //   alert("Session Timeout or Inavlid please try again...");
  //       //   this.router.navigate(['/login']);
  //       // }
  //     })

  //     let obj2 = {
  //       "date": (this.years.length > 0)?this.years[0].year:5555,
  //       "keykjm": this.keykjm
  //     }
  //   this.allservice.posturl(this.redemptionChartUrl, obj2)
  //     .subscribe(data => {
  //       this.redemptionData = data.data;
  //       this.barChartLabels = this.redemptionData.months as string[];
  //       this.barChartData = this.redemptionData.list as number[];
  //       // if (data.data.error_code == "397") {
  //       //   alert("Session Timeout");
  //       //   this.router.navigate(['/login']);
  //       // }
  //       // if (data.data.error_code == "393") {
  //       //   alert("Session Timeout or Inavlid please try again...");
  //       //   this.router.navigate(['/login']);
  //       // }
  //     })

  //     let obj3 = {
  //       "date": (this.years.length > 0)?this.years[0].year:5555,
  //       "keykjm": this.keykjm
  //     }
  //   this.allservice.posturl(this.consumerTrendChartUrl, obj3)
  //     .subscribe(data => {
  //       this.consumerData = data.data;
  //       this.lineChart1Labels = this.consumerData.months as string[];
  //       this.lineChart1Data = this.consumerData.list as number[];
       
  //       // if (data.data.error_code == "397") {
  //       //   alert("Session Timeout");
  //       //   this.router.navigate(['/login']);
  //       // }
  //       // if (data.data.error_code == "393") {
  //       //   alert("Session Timeout or Inavlid please try again...");
  //       //   this.router.navigate(['/login']);
  //       // }
  //     })


  //     let obj4 = {
  //       "date": (this.years.length > 0)?this.years[0].year:5555,
  //       "keykjm": this.keykjm
  //     }
  //   this.allservice.posturl(this.accrualChartUrl, obj4)
  //     .subscribe(data => {
  //       this.accrualData = data.data;
  //       this.lineChartLabels = this.accrualData.months as string[];
  //       this.lineChartData = this.accrualData.list as number[];
  //       // if (data.data.error_code == "397") {
  //       //   alert("Session Timeout");
  //       //   this.router.navigate(['/login']);
  //       // }
  //       // if (data.data.error_code == "393") {
  //       //   alert("Session Timeout or Inavlid please try again...");
  //       //   this.router.navigate(['/login']);
  //       // }
  //     })

  //     let obj5 = {
  //       "keykjm": this.keykjm
  //     }
  //   this.allservice.posturl(this.consumerActivityUrl, obj5)
  //     .subscribe(data => {
  //       this.consumerActivityData = data.data.list; 
  //       // if (data.data.error_code == "397") {
  //       //   alert("Session Timeout");
  //       //   this.router.navigate(['/login']);
  //       // }
  //       // if (data.data.error_code == "393") {
  //       //   alert("Session Timeout or Inavlid please try again...");
  //       //   this.router.navigate(['/login']);
  //       // }
  //     })

  //     let obj6 = {
  //       "date": (this.years.length > 0)?this.years[0].year:5555,
  //       "keykjm": this.keykjm
  //     }
  //   this.allservice.posturl(this.referralChartUrl, obj6)
  //     .subscribe(data => {
  //       this.referralData = data.data;
  //       this.barChart1Labels = this.referralData.months as string[];
  //       this.barChart1Data = this.referralData.list as number[];
  //       // if (data.data.error_code == "397") {
  //       //   alert("Session Timeout");
  //       //   this.router.navigate(['/login']);
  //       // }
  //       // if (data.data.error_code == "393") {
  //       //   alert("Session Timeout or Inavlid please try again...");
  //       //   this.router.navigate(['/login']);
  //       // }
  //     })



  // }


  // barChangeEvent($event){
  //   console.log($event.target.value);
  //   let obj2 = {
  //     "date":$event.target.value,
  //     "keykjm": this.keykjm
  //   }
  // this.allservice.posturl(this.redemptionChartUrl, obj2)
  //   .subscribe(data => {
  //     this.redemptionData = data.data;
  //     this.barChartLabels = this.redemptionData.months as string[];
  //     this.barChartData = this.redemptionData.list as number[];
  //     console.log(data);
  //     if (data.data.error_code == "397") {
  //       alert("Session Timeout");
  //       this.router.navigate(['/login']);
  //     }
  //     if (data.data.error_code == "393") {
  //       alert("Session Timeout or Inavlid please try again...");
  //       this.router.navigate(['/login']);
  //     }
  //   })

  // }
 
  // lineChangeEvent($event){
  //   let obj4 = {
  //     "date": $event.target.value,
  //     "keykjm": this.keykjm
  //   }
  // this.allservice.posturl(this.accrualChartUrl, obj4)
  //   .subscribe(data => {
  //     this.accrualData = data.data;
  //     this.lineChartLabels = this.accrualData.months as string[];
  //     this.lineChartData = this.accrualData.list as number[];
  //     if (data.data.error_code == "397") {
  //       alert("Session Timeout");
  //       this.router.navigate(['/login']);
  //     }
  //     if (data.data.error_code == "393") {
  //       alert("Session Timeout or Inavlid please try again...");
  //       this.router.navigate(['/login']);
  //     }
  //   })
  // }

  // lineChartChangeEvent($event){
    
  //   let obj3 = {
  //     "date": $event.target.value,
  //     "keykjm": this.keykjm
  //   }
  // this.allservice.posturl(this.consumerTrendChartUrl, obj3)
  //   .subscribe(data => {
  //     this.consumerData = data.data;
  //     this.lineChart1Labels = this.consumerData.months as string[];
  //     this.lineChart1Data = this.consumerData.list as number[];
     
  //     if (data.data.error_code == "397") {
  //       alert("Session Timeout");
  //       this.router.navigate(['/login']);
  //     }
  //     if (data.data.error_code == "393") {
  //       alert("Session Timeout or Inavlid please try again...");
  //       this.router.navigate(['/login']);
  //     }
  //   })
  // }

  // couponChangeEvent($event){
    
  //   let obj1 = {
  //     "date": $event.target.value,
  //     "keykjm": this.keykjm
  //   }
  //   this.allservice.posturl(this.couponsChartUrl, obj1)
  //     .subscribe(data => {
  //       this.couponData = data.data;
  //       this.pieChartLabels = this.couponData.adminPieLable as string[];
  //       this.pieChartData = this.couponData.adminPieData as number[];
        
  //       if (data.data.error_code == "397") {
  //         alert("Session Timeout");
  //         this.router.navigate(['/login']);
  //       }
  //       if (data.data.error_code == "393") {
  //         alert("Session Timeout or Inavlid please try again...");
  //         this.router.navigate(['/login']);
  //       }
  //     })
  // }
  // bar1ChangeEvent($event){
  //   let obj7 = {
  //     "date":$event.target.value,
  //     "keykjm": this.keykjm
  //   }
  // this.allservice.posturl(this.referralChartUrl, obj7)
  //   .subscribe(data => {
  //     this.referralData = data.data;
  //     this.barChart1Labels = this.referralData.months as string[];
  //     this.barChart1Data = this.referralData.list as number[];
  //     console.log(data);
  //     if (data.data.error_code == "397") {
  //       alert("Session Timeout");
  //       this.router.navigate(['/login']);
  //     }
  //     if (data.data.error_code == "393") {
  //       alert("Session Timeout or Inavlid please try again...");
  //       this.router.navigate(['/login']);
  //     }
  //   })
  // }
}
