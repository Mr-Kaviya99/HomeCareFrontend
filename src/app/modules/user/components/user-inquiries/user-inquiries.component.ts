import {Component, OnInit} from '@angular/core';
import {GetHiredComponent} from "../user-services/inner-items/get-hired/get-hired.component";
import {MatDialog} from "@angular/material/dialog";
import {UserReviewPopUpComponent} from "../user-review-pop-up/user-review-pop-up.component";

@Component({
  selector: 'app-user-inquiries',
  templateUrl: './user-inquiries.component.html',
  styleUrls: ['./user-inquiries.component.scss']
})
export class UserInquiriesComponent implements OnInit {
  panelOpenState: boolean = false;

  constructor(
    private matDialog: MatDialog
  ) {
  }

  ngOnInit(): void {
  }

  reviewPopUp(id: string) {
    const popup = this.matDialog.open(UserReviewPopUpComponent, {
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
