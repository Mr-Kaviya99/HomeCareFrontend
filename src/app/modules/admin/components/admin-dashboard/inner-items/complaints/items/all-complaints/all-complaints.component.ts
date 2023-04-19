import {Component, OnInit} from '@angular/core';
import {TradePersonService} from "../../../../../../../share/services/trade-person/trade-person.service";
import {SnackBarService} from "../../../../../../../share/services/snack-bar/snack-bar.service";
import {ComplaintService} from "../../../../../../../share/services/complaint/complaint.service";

@Component({
  selector: 'app-all-complaints',
  templateUrl: './all-complaints.component.html',
  styleUrls: ['./all-complaints.component.scss']
})
export class AllComplaintsComponent implements OnInit {

  allComplaints: any

  constructor(
    private complaintService: ComplaintService,
    private snackBarService: SnackBarService,
  ) {
  }

  ngOnInit(): void {
    this.loadAllComplaints()
  }

  loadAllComplaints() {
    this.complaintService.getAllComplaints().subscribe(response => {
      console.log(response)
      this.allComplaints = response.data;
    }, error => {
      this.snackBarService.openErrorSnackBar('Something went wrong!', 'Close');
    })
  }
}

