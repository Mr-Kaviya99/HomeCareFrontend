import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {GetHiredComponent} from "./inner-items/get-hired/get-hired.component";

@Component({
  selector: 'app-user-services',
  templateUrl: './user-services.component.html',
  styleUrls: ['./user-services.component.scss']
})
export class UserServicesComponent implements OnInit {

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

  constructor(
    private matDialog: MatDialog
  ) {
  }

  ngOnInit(): void {
  }

  getHired(id: any) {
    const popup = this.matDialog.open(GetHiredComponent, {
      width: '800px',
      data: {
        id: id
      }
    });
    popup.afterClosed().subscribe(data => {
      console.log(data)
      if (data) {

      }
    })
  }
}
