import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {
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
