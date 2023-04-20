import {Component, OnInit} from '@angular/core';
import {CookieManagerService} from "../../../../../share/services/cookie/cookie-manager.service";
import {SnackBarService} from "../../../../../share/services/snack-bar/snack-bar.service";
import {TradePersonService} from "../../../../../share/services/trade-person/trade-person.service";
import {ComplaintService} from "../../../../../share/services/complaint/complaint.service";

@Component({
  selector: 'app-trade-person-complaints',
  templateUrl: './trade-person-complaints.component.html',
  styleUrls: ['./trade-person-complaints.component.scss']
})
export class TradePersonComplaintsComponent implements OnInit {

  user: any;
  userTradePersonDetails: any;
  tradePersonComplaints: any;

  constructor(
    private cookieManager: CookieManagerService,
    private snackBarService: SnackBarService,
    private tradePersonService: TradePersonService,
    private complaintService: ComplaintService,
  ) {
  }

  ngOnInit(): void {
    if (this.cookieManager.personalDataIsExists()) {
      try {
        this.user = JSON.parse(this.cookieManager.getPersonalData());
        this.loadTradePersonByUserId()
      } catch (e) {
        this.snackBarService.openErrorSnackBar('Something went wrong!', 'Close');
      }
    }

  }

  loadTradePersonByUserId() {
    this.tradePersonService.getTradePersonByUserId(this.user.user_id).subscribe(response => {
      this.userTradePersonDetails = response.data[0];
      this.loadComplaintsByTradePersonId()
    }, error => {
      this.snackBarService.openErrorSnackBar('Something went wrong!', 'Close');
    })
  }

  loadComplaintsByTradePersonId() {
    this.complaintService.getComplaintsByTradePersonId(this.userTradePersonDetails.id).subscribe(response => {
      console.log(response)
      this.tradePersonComplaints = response.data;
    }, error => {
      this.snackBarService.openErrorSnackBar('Something went wrong!', 'Close');
    })
  }
}
