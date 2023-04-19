import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage-services',
  templateUrl: './homepage-services.component.html',
  styleUrls: ['./homepage-services.component.scss']
})
export class HomepageServicesComponent implements OnInit {

  constructor() { }
  services:any=[
    {
      jobTypeId:1,
      jobTypeName:'PAINTER',
      image:'https://github.com/Mr-Kaviya99/HomeCare/blob/master/img/Painter.jpg?raw=true'
    },
    {
      jobTypeId:2,
      jobTypeName:'CARPENTER',
      image:'https://github.com/Mr-Kaviya99/HomeCare/blob/master/img/Carpenter.jpg?raw=true'
    },
    {
      jobTypeId:3,
      jobTypeName:'CLEANER',
      image:'https://github.com/Mr-Kaviya99/HomeCare/blob/master/img/Cleaner.jpg?raw=true'
    },
    {
      jobTypeId:4,
      jobTypeName:'ELECTRICIAN',
      image:'https://github.com/Mr-Kaviya99/HomeCare/blob/master/img/Electrician.jpg?raw=true'
    },
    {
      jobTypeId:5,
      jobTypeName:'GARDNER',
      image:'https://github.com/Mr-Kaviya99/HomeCare/blob/master/img/Gardner.jpg?raw=true'
    },
    {
      jobTypeId:6,
      jobTypeName:'HOME CARE TAKERS',
      image:'https://github.com/Mr-Kaviya99/HomeCare/blob/master/img/House%20Caretaker.png?raw=true'
    },
    {
      jobTypeId:7,
      jobTypeName:'MASON',
      image:'https://github.com/Mr-Kaviya99/HomeCare/blob/master/img/Masonary.jpg?raw=true'
    },
    {
      jobTypeId:8,
      jobTypeName:'PLUMBER',
      image:'https://github.com/Mr-Kaviya99/HomeCare/blob/master/img/Plumber.png?raw=true'
    },
  ]
  ngOnInit(): void {
  }

}
