import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-trade-person-reviews',
  templateUrl: './trade-person-reviews.component.html',
  styleUrls: ['./trade-person-reviews.component.scss']
})
export class TradePersonReviewsComponent implements OnInit {
  rating: number = 4;
  @Output() ratingUpdated = new EventEmitter();
  totalStar: number = 5;
  ratingArray: number[] = [];

  constructor() {
  }

  ngOnInit(): void {
    for (let index = 0; index < this.totalStar; index++) {
      this.ratingArray.push(index);
    }
  }


  calculateRating(rating: number) {
    this.ratingUpdated.emit(rating);
  }

  iconStatus(index: number) {
    if (this.rating >= index + 1) {
      return 'star';
    } else {
      return 'star_outlined';
    }
  }
}
