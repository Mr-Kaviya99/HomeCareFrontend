import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-trade-person-header',
  templateUrl: './trade-person-header.component.html',
  styleUrls: ['./trade-person-header.component.scss']
})
export class TradePersonHeaderComponent implements OnInit {
  navSliderState: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  manageNavBar() {
    this.navSliderState = !this.navSliderState;
  }

  inquiryPopUp($event: MouseEvent) {

  }
}
