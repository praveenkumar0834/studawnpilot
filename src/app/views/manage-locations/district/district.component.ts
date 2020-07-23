import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent implements OnInit {
  landdetails: any[] = [
    {
     
      State:'Tamilnadu',
      District:'Chennai',
      Taluk:'Chennai',
      Village:'Perumbakkam',
      
    },
    {
     
      State:'Tamilnadu',
      District:'Kanchipuram',
      Taluk:'Chennai',
      Village:'Perumbakkam',

    },
    {
     
      State:'Tamilnadu',
      District:'Virudhunagar',
      Taluk:'Rajapalayam',
      Village:'Rajapalayam',

    },
    {
     
      State:'Andhrapradesh',
      District:'Prakasm',
      Taluk:'Praksm',
      Village:'Chirala',

    },
    {
     
      State:'Andhrapradesh',
      District:'Prakasm',
      Taluk:'Praksm',
      Village:'Bapatla',

    },
    {
      State:'Andhrapradesh',
      District:'Prakasm',
      Taluk:'Praksm',
      Village:'Nellor',

    },
    {
     
      State:'Tamilnadu',
      District:'Chennai',
      Taluk:'Velacherry',
      Village:'Velacherry',

    },
    {
     
      State:'Tamilnadu',
      District:'Chennai',
      Taluk:'Adayar',
      Village:'Adayar',

    },
   
  ]


  constructor() { }

  ngOnInit() {
  }

}
