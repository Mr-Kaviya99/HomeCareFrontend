import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
// import {AuthService} from "../../../share/service/auth/auth.service";
// import {CookieManagerService} from "../../../share/service/cookie/cookie-manager.service";
// import {SnackBarService} from "../../../share/service/snack-bar/snack-bar.service";
import {Location} from '@angular/common';
import {CookieManagerService} from "../../../share/services/cookie/cookie-manager.service";
import {AuthService} from "../../../share/services/auth/auth.service";
import {SnackBarService} from "../../../share/services/snack-bar/snack-bar.service";
import {first} from "rxjs";
import {HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  countdownDate = new Date("january 09, 2023 20:00:00").getTime();
  days: any;
  hours: any;
  minutes: any;
  seconds: any;

  countdown = setInterval(() => {
    var now = new Date().getTime();
    var distance = this.countdownDate - now;
    this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((distance % (1000 * 60)) / (1000));
  })

  passwordState = true;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private _location: Location,
    private snackBarService: SnackBarService,
    private router: Router,
    private authService: AuthService,
    private cookieManager: CookieManagerService
  ) {
  }

  ngOnInit(): void {
    if (this.cookieManager.tokenIsExists('token')) {
      this.router.navigateByUrl('/user');
    }
  }

  login() {
    if (this.loginForm.get('email')?.value?.trim()!.length === 0) {
      this.snackBarService.openWarningSnackBar('Please insert a valid email!', 'Close');
      return;
    }
    if (this.loginForm.get('password')?.value?.trim()!.length === 0) {
      this.snackBarService.openWarningSnackBar('Please insert a valid password!', 'Close');
      return;
    }

    this.authService.login(
      this.loginForm.get('email')?.value!,
      this.loginForm.get('password')?.value!
    )
      .pipe(first())
      .subscribe(
        (data: HttpResponse<any>) => {
          this.cookieManager.setToken(data?.body?.data?.token!);
          this.router.navigateByUrl('/user').then();
          // this._location.back();
          this.snackBarService.openSuccessSnackBar('welcome again!', 'Close');
        },
        error => {
          this.snackBarService.openErrorSnackBar('username or password incorrect!', 'Close');
        });
  }


}
