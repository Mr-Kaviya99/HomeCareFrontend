import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {JobTypeService} from "../../../share/services/job-type/job-type.service";
import {TradePersonService} from "../../../share/services/trade-person/trade-person.service";
import {SnackBarService} from "../../../share/services/snack-bar/snack-bar.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../share/services/user/user.service";
import {ComplaintService} from "../../../share/services/complaint/complaint.service";

@Component({
  selector: 'app-user-complaint-pop-up',
  templateUrl: './user-complaint-pop-up.component.html',
  styleUrls: ['./user-complaint-pop-up.component.scss']
})
export class UserComplaintPopUpComponent implements OnInit {

  userDetails: any
  userId: any;

  tradePerson: any;
  allJobTypes: any;

  complaintForm = new FormGroup({
    jobType: new FormControl('', [Validators.required]),
    tradePerson: new FormControl('', [Validators.required]),
    complaint: new FormControl('', [Validators.required]),
  });

  constructor(
    public dialogRef: MatDialogRef<UserComplaintPopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private jobTypeService: JobTypeService,
    private tradePersonService: TradePersonService,
    private complaintService: ComplaintService,
    private userService: UserService,
    private snackBarService: SnackBarService
  ) {
  }

  ngOnInit(): void {
    this.loadJobTypeIdAndName();
    this.loadUserData();
  }

  loadUserData() {
    this.userService.getUserData().subscribe(response => {
      this.userId = response.data.user_id;
      this.userDetails = response.data;
    }, error => {
      this.snackBarService.openErrorSnackBar('Something went wrong!', 'Close');
    })
  }

  close() {
    this.dialogRef.close();
  }

  loadJobTypeIdAndName() {
    this.jobTypeService.getAllJobTypes().subscribe(response => {
      this.allJobTypes = response.data;
    }, error => {
      this.snackBarService.openErrorSnackBar('Something went wrong!', 'Close');
    })
  }

  loadTradePersonByJobType(event: any) {
    this.tradePersonService.getAllTradePersonsByJobTypeId(event.value).subscribe(response => {
      console.log(response)
      this.tradePerson = response.data;
    }, error => {
      this.snackBarService.openErrorSnackBar('Something went wrong!', 'Close');
    })
  }

  submitComplaint() {
    let jobType = this.complaintForm.get('jobType')?.value!;
    let tradePerson = this.complaintForm.get('tradePerson')?.value!;
    let complaint = this.complaintForm.get('complaint')?.value!;

    this.complaintService.newComplaint(this.userId, jobType, tradePerson, complaint).subscribe(response => {
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
