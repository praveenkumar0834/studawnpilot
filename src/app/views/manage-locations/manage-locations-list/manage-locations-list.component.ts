import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-locations-list',
  templateUrl: './manage-locations-list.component.html',
  styleUrls: ['./manage-locations-list.component.css']
})
export class ManageLocationsListComponent implements OnInit {
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
