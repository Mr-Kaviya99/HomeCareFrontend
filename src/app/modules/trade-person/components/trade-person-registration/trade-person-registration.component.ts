import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, Validators} from "@angular/forms";
import {JobTypeService} from "../../../share/services/job-type/job-type.service";
import {LoadingService} from "../../../share/services/loading/loading.service";
import {LocationService} from "../../../share/services/locaion/location.service";
import {SnackBarService} from "../../../share/services/snack-bar/snack-bar.service";
import {TradePersonService} from "../../../share/services/trade-person/trade-person.service";
import {UserService} from "../../../share/services/user/user.service";
import {Router} from "@angular/router";
import {CookieManagerService} from "../../../share/services/cookie/cookie-manager.service";

@Component({
  selector: 'app-trade-person-registration',
  templateUrl: './trade-person-registration.component.html',
  styleUrls: ['./trade-person-registration.component.scss']
})
export class TradePersonRegistrationComponent implements OnInit {

  tradePersonForm = new FormGroup({
    jobType: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    nic: new FormControl('', [Validators.required, Validators.pattern('(?:19|20)?\\d{3}[0-9]{8}|[0-9]{9}[x|X|v|V]')]),
    longitude: new FormControl('', [Validators.required]),
    latitude: new FormControl('', [Validators.required]),
  });
  longitude: any;
  latitude: any;
  locationChosen = false;
  allJobTypes: any;
  zoom: number = 10;
  userDetails: any
  userId: any;

  constructor(
    private jobTypeService: JobTypeService,
    private userService: UserService,
    private tradePersonService: TradePersonService,
    private loadingService: LoadingService,
    private locationService: LocationService,
    private cookieManager: CookieManagerService,
    private snackBarService: SnackBarService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.locationService.getPosition().then(pos => {
      this.latitude = pos.lat;
      this.longitude = pos.lng;
    });
    this.loadJobTypeIdAndName();
    this.loadUserData();
  }

  clearForm(f: FormGroupDirective) {

  }

  loadJobTypeIdAndName() {
    this.jobTypeService.getAllJobTypes().subscribe(response => {
      this.allJobTypes = response.data;
    }, error => {
      this.snackBarService.openErrorSnackBar('Something went wrong!', 'Close');
    })
  }

  loadUserData() {
    this.userService.getUserData().subscribe(response => {
      this.userId = response.data.user_id;
      this.userDetails = response.data;
    }, error => {
      this.snackBarService.openErrorSnackBar('Something went wrong!', 'Close');
    })
  }

  applyTradePerson(form: FormGroupDirective) {
    let jobType = this.tradePersonForm.get('jobType')?.value!;
    let gender = this.tradePersonForm.get('gender')?.value!;
    let nic = this.tradePersonForm.get('nic')?.value!;
    let longitude = this.tradePersonForm.get('longitude')?.value!;
    let latitude = this.tradePersonForm.get('latitude')?.value!;

    this.tradePersonService.newTradePerson(
      this.userId,
      jobType,
      gender,
      nic,
      latitude,
      longitude
    ).subscribe(response => {
      console.log(response)
      if (response.code == 200) {
        this.cookieManager.logout()
        this.router.navigateByUrl('/security/login');
        this.snackBarService.openSuccessSnackBar('Success!', 'Close');
        this.refreshForm(form);
      }
    }, error => {
      this.refreshForm(form);
      this.snackBarService.openErrorSnackBar('Something went wrong!', 'Close');
    })
  }

  onChooseLocation(event: any) {
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    this.locationChosen = true;
  }

  private refreshForm(form: FormGroupDirective) {
    form.resetForm();
  }
}
