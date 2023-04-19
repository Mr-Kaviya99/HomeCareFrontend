import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CookieManagerService} from "../../../share/services/cookie/cookie-manager.service";

@Component({
  selector: 'app-trade-person-header',
  templateUrl: './trade-person-header.component.html',
  styleUrls: ['./trade-person-header.component.scss']
})
export class TradePersonHeaderComponent implements OnInit {
  navSliderState: boolean = false;

  constructor(
    private router: Router,
    private cookieManager: CookieManagerService,
  ) {
  }

  ngOnInit(): void {
  }

  manageNavBar() {
    this.navSliderState = !this.navSliderState;
  }

  logOut() {
    this.cookieManager.logout()
    this.router.navigateByUrl('/security/login');
  }
}
