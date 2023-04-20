import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../share/services/user/user.service";
import {ReviewsService} from "../../../share/services/reviews/reviews.service";
import {SnackBarService} from "../../../share/services/snack-bar/snack-bar.service";

@Component({
  selector: 'app-user-review-pop-up',
  templateUrl: './user-review-pop-up.component.html',
  styleUrls: ['./user-review-pop-up.component.scss']
})
export class UserReviewPopUpComponent implements OnInit {
  userId: any;
  requestId: any;
  reviewForm = new FormGroup({
    starRating: new FormControl(null, [Validators.required]),
    comment: new FormControl('', [Validators.required]),
  });

  constructor(
    public dialogRef: MatDialogRef<UserReviewPopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userService: UserService,
    private reviewsService: ReviewsService,
    private snackBarService: SnackBarService,
  ) {
  }


  ngOnInit(): void {
    this.requestId = this.data.id;
    this.loadUserData()
  }

  loadUserData() {
    this.userService.getUserData().subscribe(response => {
      this.userId = response.data.user_id;
    }, error => {
      this.snackBarService.openErrorSnackBar('Something went wrong!', 'Close');
    })
  }

  close() {
    this.dialogRef.close();
  }

  submitReview() {
    let starCount = this.reviewForm.get('starRating')?.value!;
    let comment = this.reviewForm.get('comment')?.value!;

    this.reviewsService.newReview(this.userId, this.requestId, starCount, comment).subscribe(response => {
      console.log(response)
      if (response.code == 200) {
        this.snackBarService.openSuccessSnackBar('Success!', 'Close');
        this.close()
      }
    }, error => {
      this.snackBarService.openErrorSnackBar('Something went wrong!', 'Close');
      this.close()
    })
  }
}
