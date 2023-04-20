import {Component, OnInit} from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";
import {ReviewsService} from "../../../../../share/services/reviews/reviews.service";
import {SnackBarService} from "../../../../../share/services/snack-bar/snack-bar.service";

@Component({
  selector: 'app-homepage-reviews',
  templateUrl: './homepage-reviews.component.html',
  styleUrls: ['./homepage-reviews.component.scss']
})
export class HomepageReviewsComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    autoplay: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 2
      },
      991: {
        items: 3
      },
      1399: {
        items: 4
      },
    },
    nav: true
  }
  slidesStore: any;

  constructor(
    private reviewsService: ReviewsService,
    private snackBarService: SnackBarService,
  ) {
  }

  ngOnInit(): void {
    this.loadAllReviews()
  }

  loadAllReviews() {
    this.reviewsService.getAllReviews().subscribe(response => {
      this.slidesStore = response.data;
    }, error => {
      this.snackBarService.openErrorSnackBar('Something went wrong!', 'Close');
    })
  }

}
