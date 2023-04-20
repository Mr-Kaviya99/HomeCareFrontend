import {Component, OnInit} from '@angular/core';
import {CookieManagerService} from "../../../../../share/services/cookie/cookie-manager.service";
import {SnackBarService} from "../../../../../share/services/snack-bar/snack-bar.service";
import {TradePersonService} from "../../../../../share/services/trade-person/trade-person.service";
import {InquiryService} from "../../../../../share/services/inquiry/inquiry.service";

@Component({
  selector: 'app-trade-person-job-requests',
  templateUrl: './trade-person-job-requests.component.html',
  styleUrls: ['./trade-person-job-requests.component.scss']
})
export class TradePersonJobRequestsComponent implements OnInit {

  user: any;
  userTradePersonDetails: any;
  serviceReqDetails: any;

  constructor(
    private cookieManager: CookieManagerService,
    private snackBarService: SnackBarService,
    private tradePersonService: TradePersonService,
    private inquiryService: InquiryService,
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
      this.loadServiceRequestByTradePersonId();
    }, error => {
      this.snackBarService.openErrorSnackBar('Something went wrong!', 'Close');
    })
  }

  loadServiceRequestByTradePersonId() {
    this.inquiryService.getServiceRequestByTradePersonId(this.userTradePersonDetails?.id).subscribe(response => {
      this.serviceReqDetails = response.data;
    }, error => {
      this.snackBarService.openErrorSnackBar('Something went wrong!', 'Close');
    })
  }
}
