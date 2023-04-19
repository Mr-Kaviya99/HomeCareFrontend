import {Component, OnInit} from '@angular/core';
import {CookieManagerService} from "../share/services/cookie/cookie-manager.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(
    private cookieManager: CookieManagerService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    if (!this.cookieManager.tokenIsExists('token')) {
      this.router.navigateByUrl('/security/login');
    }
  }

}
