import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CookieManagerService} from "../../../share/services/cookie/cookie-manager.service";

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {
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
