import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-user-review-pop-up',
  templateUrl: './user-review-pop-up.component.html',
  styleUrls: ['./user-review-pop-up.component.scss']
})
export class UserReviewPopUpComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<UserReviewPopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
  }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

  submitReview() {

  }
}
