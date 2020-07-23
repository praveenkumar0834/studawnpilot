import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-land-rate',
  templateUrl: './manage-land-rate.component.html',
  styleUrls: ['./manage-land-rate.component.css']
})
export class ManageLandRateComponent implements OnInit {

  constructor() { }
landrate:any[]=[
  {caoffice:"Chittor",state:"Andhra Pradesh",district:"chittoor",taluk:"Kalikiri",Village:"Palamaneru",langtype:"dry",rate:"50000"},
  {caoffice:"Tamilnadu",state:"Tamilnadu",district:"kanchipuram",taluk:"Alandur",Village:"Agaram",langtype:"wet",rate:"10000"},
  {caoffice:"Coimbator",state:"Coimbator",district:"Sulur",taluk:"Idikarai",Village:"Valparai",langtype:"dry",rate:"25000"},
  {caoffice:"Namakkal",state:"Tamilnadu",district:"Namakkal",taluk:"Elacipalayam",Village:"Akkalampatti",langtype:"dry",rate:"20000"},
  {caoffice:"Namakkal",state:"Tamilnadu",district:"Namakkal",taluk:"Erumapatty",Village:"Konangipatti",langtype:"dry",rate:"15000"},
  {caoffice:"Dharmapuri",state:"Tamilnadu",district:"Dharmapuri",taluk:"Naikanahalli",Village:"Vellalapatti",langtype:"wet",rate:"10000"},
  {caoffice:"Dharmapuri",state:"Tamilnadu",district:"Nallampalli",taluk:"Echanahalli",Village:"Narthampatti",langtype:"dry",rate:"17000"},
  {caoffice:"Pennagaram",state:"Tamilnadu",district:"Gopinathampatti",taluk:"Kelavalli",Village:"Palamaneru",langtype:"wet",rate:"15000"},
  {caoffice:"Harur",state:"Tamilnadu",district:"Harur",taluk:"Kalikiri",Village:"Keerkodahalli",langtype:"dry",rate:"10000"},
  {caoffice:"Morappur",state:"Tamilnadu",district:"Morappur",taluk:"Kalikiri",Village:"Vaguthuppatti",langtype:"dry",rate:"16000"},
    
]

  ngOnInit() {
  }

}
