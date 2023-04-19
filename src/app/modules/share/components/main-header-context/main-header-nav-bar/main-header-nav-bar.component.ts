import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-main-header-nav-bar',
  templateUrl: './main-header-nav-bar.component.html',
  styleUrls: ['./main-header-nav-bar.component.scss']
})
export class MainHeaderNavBarComponent implements OnInit {
  navSliderState = false;
  pageSize: any = 10;
  page: any = 0;

  constructor(
    private route: Router,
    public dialog: MatDialog,
  ) {
  }

  manageNavBar() {
    console.log('fired');
    this.navSliderState = !this.navSliderState;
  }


  ngOnInit(): void {
  }

  inquiryPopUp(event: MouseEvent): void {
    // const dialogRef = this.dialog.open(, {
    //   width: '1000px'
    // });
  }
}
