import {Component, OnInit} from '@angular/core';
import {TabItem} from "../../../../../share/dto/TabItem";

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.scss']
})
export class ComplaintsComponent implements OnInit {

  tabs: TabItem[] = [
    {
      label: 'Complaints Lists',
      icon: '',
      route: '/admin/dashboard/complaints/all'
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
