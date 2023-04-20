import {Component, OnInit} from '@angular/core';
import {CookieManagerService} from "../../../../../share/services/cookie/cookie-manager.service";
import {SnackBarService} from "../../../../../share/services/snack-bar/snack-bar.service";
import {TradePersonService} from "../../../../../share/services/trade-person/trade-person.service";

@Component({
  selector: 'app-trade-person-my-profile',
  templateUrl: './trade-person-my-profile.component.html',
  styleUrls: ['./trade-person-my-profile.component.scss']
})
export class TradePersonMyProfileComponent implements OnInit {

  user: any;
  userTradePersonDetails: any;

  constructor(
    private cookieManager: CookieManagerService,
    private snackBarService: SnackBarService,
    private tradePersonService: TradePersonService,
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
      console.log(response)
      this.userTradePersonDetails = response.data[0];
      console.log(this.userTradePersonDetails)
    }, error => {
      this.snackBarService.openErrorSnackBar('Something went wrong!', 'Close');
    })
  }

  editPersonalDetails() {

  }
}
