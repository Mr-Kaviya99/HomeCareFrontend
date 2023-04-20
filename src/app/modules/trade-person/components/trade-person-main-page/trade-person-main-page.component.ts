import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CookieManagerService} from "../../../share/services/cookie/cookie-manager.service";
import {UserService} from "../../../share/services/user/user.service";

@Component({
  selector: 'app-trade-person-main-page',
  templateUrl: './trade-person-main-page.component.html',
  styleUrls: ['./trade-person-main-page.component.scss']
})
export class TradePersonMainPageComponent implements OnInit {

  constructor(
    private router: Router,
    private cookieManager: CookieManagerService,
    private userService: UserService,
  ) {
  }

  ngOnInit(): void {
    this.check()
  }

  check() {
    if (this.cookieManager.tokenIsExists('token')) {
      this.userService.getUserData().subscribe(response => {
        this.cookieManager.setPersonalData(response.data);
        if (response.data.role === 'tradeperson') {
          this.router.navigateByUrl('/trade-person/dashboard');
        } else {
          this.router.navigateByUrl('/security/login');
        }
      })
    } else {
      this.router.navigateByUrl('/security/login');
    }
  }
}
