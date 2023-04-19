import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {UserComplaintPopUpComponent} from "../user-complaint-pop-up/user-complaint-pop-up.component";
import {CookieManagerService} from "../../../share/services/cookie/cookie-manager.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss']
})
export class UserHeaderComponent implements OnInit {
  navSliderState = false;

  constructor(
    private matDialog: MatDialog,
    private router: Router,
    private cookieManager: CookieManagerService,
  ) {
  }

  ngOnInit(): void {
  }

  manageNavBar() {
    this.navSliderState = !this.navSliderState;
  }

  complaintPopUp() {
    this.manageNavBar();
    const popup = this.matDialog.open(UserComplaintPopUpComponent, {
      width: '400px'
    });
    popup.afterClosed().subscribe(data => {
      console.log(data)
      if (data) {

      }
    })
  }

  logOut() {
    this.cookieManager.logout()
    this.router.navigateByUrl('/security/login');
  }

  login($event: MouseEvent) {
    this.router.navigateByUrl('/trade-person/dashboard');
  }
}
