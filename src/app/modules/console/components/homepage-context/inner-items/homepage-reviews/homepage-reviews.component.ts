import {Component, OnInit} from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";

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
  slidesStore = [
    {
      image: 'https://github.com/Mr-Kaviya99/HomeCare/blob/master/img/Review_Profile_Pic_8.jpeg?raw=true',
      name: "Ridmi Jayamanna",
      starCount: 5,
      description: "I received great cleaning service from Billie, she was professional and efficient, my flat was perfect and Billie was nice to meet!"
    }, {
      image: 'https://github.com/Mr-Kaviya99/HomeCare/blob/master/img/Review_Profile_Pic_2.jpeg?raw=true',
      name: "Deshan Perera",
      starCount: 5,
      description: "Speedy service, extremely satisfied by the quality provided."
    }, {
      image: 'https://github.com/Mr-Kaviya99/HomeCare/blob/master/img/Review_Profile_Pic_1.jpeg?raw=true',
      name: "Anne Fernando",
      starCount: 5,
      description: "Very friendly and a very good cleaner, would highly recommend."
    },

  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
