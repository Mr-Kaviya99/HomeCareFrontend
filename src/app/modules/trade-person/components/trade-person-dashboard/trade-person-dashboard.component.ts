import {Component, OnInit} from '@angular/core';
import {TabItem} from "../../../share/dto/TabItem";

@Component({
  selector: 'app-trade-person-dashboard',
  templateUrl: './trade-person-dashboard.component.html',
  styleUrls: ['./trade-person-dashboard.component.scss']
})
export class TradePersonDashboardComponent implements OnInit {

  tabs: TabItem[] = [
    {
      label: 'My Profile',
      icon: '',
      route: '/trade-person/dashboard/my-profile'
    },
    {
      label: 'Job Requests',
      icon: '',
      route: '/trade-person/dashboard/job-requests'
    },
    {
      label: 'Reviews',
      icon: '',
      route: '/trade-person/dashboard/reviews'
    },
    {
      label: 'Complaints',
      icon: '',
      route: '/trade-person/dashboard/complaints'
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }
}
