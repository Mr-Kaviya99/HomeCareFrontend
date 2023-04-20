import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {UserReviewPopUpComponent} from "../user-review-pop-up/user-review-pop-up.component";
import {InquiryService} from "../../../share/services/inquiry/inquiry.service";
import {UserService} from "../../../share/services/user/user.service";
import {SnackBarService} from "../../../share/services/snack-bar/snack-bar.service";

@Component({
  selector: 'app-user-inquiries',
  templateUrl: './user-inquiries.component.html',
  styleUrls: ['./user-inquiries.component.scss']
})
export class UserInquiriesComponent implements OnInit {

  userId: any;
  serviceReqDetails: any;
  panelOpenState: boolean = false;

  constructor(
    private matDialog: MatDialog,
    private inquiryService: InquiryService,
    private userService: UserService,
    private snackBarService: SnackBarService,
  ) {
  }

  ngOnInit(): void {
    this.loadUserData()
  }

  loadUserData() {
    this.userService.getUserData().subscribe(response => {
      this.userId = response.data.user_id;
      this.loadServiceRequestByUserId()
    }, error => {
      this.snackBarService.openErrorSnackBar('Something went wrong!', 'Close');
    })
  }

  loadServiceRequestByUserId() {
    this.inquiryService.getServiceRequestByUserId(this.userId).subscribe(response => {
      this.serviceReqDetails = response.data;
    }, error => {
      this.snackBarService.openErrorSnackBar('Something went wrong!', 'Close');
    })
  }

  reviewPopUp(id: string) {
    const popup = this.matDialog.open(UserReviewPopUpComponent, {
      width: '400px',
      data: {
        id: id
      }
    });
  }
}
