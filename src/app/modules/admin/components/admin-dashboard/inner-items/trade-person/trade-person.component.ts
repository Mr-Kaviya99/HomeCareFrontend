import {Component, OnInit} from '@angular/core';
import {TabItem} from "../../../../../share/dto/TabItem";

@Component({
  selector: 'app-trade-person',
  templateUrl: './trade-person.component.html',
  styleUrls: ['./trade-person.component.scss']
})
export class TradePersonComponent implements OnInit {
  tabs: TabItem[] = [
    {
      label: 'Trade Person Lists',
      icon: '',
      route: '/admin/dashboard/trade-person/all'
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
