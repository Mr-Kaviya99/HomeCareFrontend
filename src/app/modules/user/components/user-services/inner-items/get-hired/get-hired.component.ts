import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {LoadingService} from "../../../../../share/services/loading/loading.service";
import {TradePersonService} from "../../../../../share/services/trade-person/trade-person.service";
import {InquiryService} from "../../../../../share/services/inquiry/inquiry.service";
import {SnackBarService} from "../../../../../share/services/snack-bar/snack-bar.service";
import {LocationService} from "../../../../../share/services/locaion/location.service";
import {UserService} from "../../../../../share/services/user/user.service";

@Component({
  selector: 'app-get-hired',
  templateUrl: './get-hired.component.html',
  styleUrls: ['./get-hired.component.scss']
})
export class GetHiredComponent implements OnInit {
  userId: any;
  userDetails: any;
  selectedJobTypeId: any;
  latitude: any;
  longitude: any;
  zoom: number = 10;
  locationChosen = false;

  selectedTradePerson: any;

  tradePersonList: any = [];

  constructor(
    public dialogRef: MatDialogRef<GetHiredComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private tradePersonService: TradePersonService,
    private inquiryService: InquiryService,
    private loadingService: LoadingService,
    private locationService: LocationService,
    private userService: UserService,
    private snackBarService: SnackBarService
  ) {
  }

  ngOnInit(): void {
    this.selectedJobTypeId = this.data?.id;
    this.locationService.getPosition().then(pos => {
      this.latitude = pos.lat;
      this.longitude = pos.lng;
      this.loadTradePersonsByJobTypeIdAndLngAndLat();
    });

    this.loadUserData();

  }

  loadTradePersonsByJobTypeIdAndLngAndLat() {
    this.tradePersonService.getTradePersonsByJobTypeAndLngAndLat(
      this.selectedJobTypeId,
      this.latitude,
      this.longitude).subscribe(response => {
      for (let tp of response.data) {
        this.tradePersonToArray(tp?.id)
      }
    }, error => {
      return;
    })
  }

  tradePersonToArray(tradePersonId: any) {
    this.tradePersonService.getTradePersonAllData(tradePersonId).subscribe(response => {
      this.tradePersonList.push(response.data[0])
    }, error => {
      this.snackBarService.openErrorSnackBar('Something went wrong!', 'close')
      return;
    })
  }

  close() {
    this.dialogRef.close();
  }

  submitRequest() {
    this.inquiryService.saveInquiry(this.userId, this.selectedTradePerson.id, this.selectedJobTypeId).subscribe(response => {
      if (response.code == 200) {
        this.snackBarService.openSuccessSnackBar('Success!', 'Close');
        this.close()
      }
    }, error => {
      this.snackBarService.openErrorSnackBar('Something went wrong!', 'close')
      return;
    })
  }

  selectedTradePersonFromList(tradePerson: any) {
    this.selectedTradePerson = tradePerson;
  }

  onChooseLocation(event: any) {
    this.tradePersonList = [];
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    this.locationChosen = true;

    this.loadTradePersonsByJobTypeIdAndLngAndLat();
  }

  loadUserData() {
    this.userService.getUserData().subscribe(response => {
      this.userId = response.data.user_id;
      this.userDetails = response.data;
    }, error => {
      this.snackBarService.openErrorSnackBar('Something went wrong!', 'Close');
    })
  }
}
