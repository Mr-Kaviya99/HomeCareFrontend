import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CookieManagerService} from "../../../share/services/cookie/cookie-manager.service";
import {UserService} from "../../../share/services/user/user.service";

@Component({
  selector: 'app-trade-person-verification-pool',
  templateUrl: './trade-person-verification-pool.component.html',
  styleUrls: ['./trade-person-verification-pool.component.scss']
})
export class TradePersonVerificationPoolComponent implements OnInit {
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
          this.router.navigateByUrl('/trade-person/registration');
        }
      })
    } else {
      this.router.navigateByUrl('/security/login');
    }
  }


}
