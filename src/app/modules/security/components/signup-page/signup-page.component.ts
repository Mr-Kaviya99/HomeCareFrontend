import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
// import {AuthService} from "../../../share/service/auth/auth.service";
import {Router} from "@angular/router";
import {CookieManagerService} from "../../../share/services/cookie/cookie-manager.service";
import {AuthService} from "../../../share/services/auth/auth.service";
import {SnackBarService} from "../../../share/services/snack-bar/snack-bar.service";
// import {SnackBarService} from "../../../share/service/snack-bar/snack-bar.service";
// import {CookieManagerService} from "../../../share/service/cookie/cookie-manager.service";

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {


  userForm = new FormGroup({
    fName: new FormControl('',
      [Validators.required, Validators.minLength(3), Validators.maxLength(45)]),
    lName: new FormControl('',
      [Validators.required, Validators.minLength(3), Validators.maxLength(45)]),
    mobile: new FormControl('',
      [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
    email: new FormControl('',
      [Validators.required, Validators.email]),
    password: new FormControl('',
      [Validators.required, Validators.minLength(6), Validators.maxLength(45)]),
  });
  passwordState: boolean = false;

  constructor(
    private cookieManager: CookieManagerService,
    private authService: AuthService,
    private router: Router,
    private snackBarService: SnackBarService
  ) {
  }

  signup() {

    if (this.userForm.get('email')?.value?.trim()!.length === 0) {
      this.snackBarService.openWarningSnackBar('Please insert a valid email!', 'Close');
      return;
    }
    if (this.userForm.get('password')?.value?.trim()!.length === 0) {
      this.snackBarService.openWarningSnackBar('Please insert a valid password!', 'Close');
      return;
    }

    this.authService.signup(
      this.userForm.get('fName')?.value!,
      this.userForm.get('lName')?.value!,
      this.userForm.get('email')?.value?.trim()!,
      this.userForm.get('mobile')?.value!,
      this.userForm.get('password')?.value?.trim()!,
    ).subscribe(response => {
        console.log(response)
      if (response){
        this.snackBarService.openSuccessSnackBar('Registration Success!', 'Close');
        this.router.navigateByUrl('/security/login');
      }
      },
      error => {
        this.snackBarService.openWarningSnackBar('Something went wrong!', 'Close');
      })
  }

  ngOnInit(): void {
    if (this.cookieManager.tokenIsExists('token')) {
      this.router.navigateByUrl('/console/verification')
    }
  }
}
