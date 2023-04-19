import { Component, OnInit } from '@angular/core';
import {TabItem} from "../../../share/dto/TabItem";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  tabs: TabItem[] = [
    {
      label: 'Homepage',
      icon: '',
      route: '/admin/dashboard/main-page'
    },
    {
      label: 'Job Type',
      icon: '',
      route: '/admin/dashboard/job-type'
    },
    {
      label: 'Trade Person',
      icon: '',
      route: '/admin/dashboard/trade-person'
    },
    {
      label: 'Complaints',
      icon: '',
      route: '/admin/dashboard/complaints'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
