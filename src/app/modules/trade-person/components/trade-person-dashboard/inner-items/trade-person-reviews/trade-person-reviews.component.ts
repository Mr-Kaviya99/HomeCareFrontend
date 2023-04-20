import {Component, OnInit} from '@angular/core';
import {ReviewsService} from "../../../../../share/services/reviews/reviews.service";
import {SnackBarService} from "../../../../../share/services/snack-bar/snack-bar.service";
import {CookieManagerService} from "../../../../../share/services/cookie/cookie-manager.service";
import {TradePersonService} from "../../../../../share/services/trade-person/trade-person.service";

@Component({
  selector: 'app-trade-person-reviews',
  templateUrl: './trade-person-reviews.component.html',
  styleUrls: ['./trade-person-reviews.component.scss']
})
export class TradePersonReviewsComponent implements OnInit {
  slidesStore: any;
  user: any;
  userTradePersonDetails: any;

  constructor(
    private reviewsService: ReviewsService,
    private snackBarService: SnackBarService,
    private cookieManager: CookieManagerService,
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
    this.loadAllReviewsByTradePersonId()
  }

  loadTradePersonByUserId() {
    this.tradePersonService.getTradePersonByUserId(this.user.user_id).subscribe(response => {
      this.userTradePersonDetails = response.data[0];
      this.loadAllReviewsByTradePersonId()
    }, error => {
      this.snackBarService.openErrorSnackBar('Something went wrong!', 'Close');
    })
  }

  loadAllReviewsByTradePersonId() {
    this.reviewsService.getAllReviewsByTradePersonId(this.userTradePersonDetails.id).subscribe(response => {
      this.slidesStore = response.data;
    }, error => {
      this.snackBarService.openErrorSnackBar('Something went wrong!', 'Close');
    })
  }
}
