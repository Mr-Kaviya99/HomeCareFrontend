import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CookieManagerService} from "../../../share/services/cookie/cookie-manager.service";
import {UserService} from "../../../share/services/user/user.service";
import {SnackBarService} from "../../../share/services/snack-bar/snack-bar.service";

@Component({
  selector: 'app-admin-verification-pool',
  templateUrl: './admin-verification-pool.component.html',
  styleUrls: ['./admin-verification-pool.component.scss']
})
export class AdminVerificationPoolComponent implements OnInit {

  constructor(
    private router: Router,
    private cookieManager: CookieManagerService,
    private userService: UserService,
    private snackBarService: SnackBarService,
  ) {
  }

  ngOnInit(): void {
    this.check()
  }

  check() {
    if (this.cookieManager.tokenIsExists('token')) {
      this.userService.getUserData().subscribe(response => {
        this.cookieManager.setPersonalData(response.data);
        if (response.data.role === 'admin') {
          this.router.navigateByUrl('/admin/dashboard');
        } else {
          this.router.navigateByUrl('/security/login');
          this.snackBarService.openWarningSnackBar('You are not an Admin! please aware of this.', 'close')
        }
      })
    } else {
      this.router.navigateByUrl('/security/login');
    }
  }


}
