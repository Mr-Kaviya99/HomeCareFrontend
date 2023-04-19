import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {LoadingService} from "../../../../../share/services/loading/loading.service";
import {TradePersonService} from "../../../../../share/services/trade-person/trade-person.service";
import {InquiryService} from "../../../../../share/services/inquiry/inquiry.service";
import {SnackBarService} from "../../../../../share/services/snack-bar/snack-bar.service";
import {LocationService} from "../../../../../share/services/locaion/location.service";

@Component({
  selector: 'app-get-hired',
  templateUrl: './get-hired.component.html',
  styleUrls: ['./get-hired.component.scss']
})
export class GetHiredComponent implements OnInit {

  selectedJobTypeId: any;
  latitude = 51.55633890314539;
  longitude = 0.0749181794395648;
  zoom: number = 10;
  locationChosen = false;
  userCurrentLongitude: any;
  userCurrentLatitude: any;

  selectedTradePerson: any;

  tradePersonList: any = [
    {
      firstName: 'Ridmi',
      lastName: 'Jayamanna',
      email: 'ridmi@gmail.com',
      contact: '0771234567',
      lat: 51.5475728927691,
      lng: 0.06496181957628355,
    },
    {
      firstName: 'James',
      lastName: 'Bond',
      email: 'james@gmail.com',
      contact: '0772345678',
      lat: 51.52085082770725,
      lng: 0.1906663102236017,
    },
    {
      firstName: 'Jayan',
      lastName: 'Bhanuka',
      email: 'jayan@gmail.com',
      contact: '0773456789',
      lat: 51.620478117464266,
      lng: 0.07565318766500795,
    }
  ]

  constructor(
    public dialogRef: MatDialogRef<GetHiredComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private tradePersonService: TradePersonService,
    private inquiryService: InquiryService,
    private loadingService: LoadingService,
    private locationService: LocationService,
    private snackBarService: SnackBarService
  ) {
  }

  ngOnInit(): void {
    this.selectedJobTypeId = this.data;

    /////////////////////////

    this.locationService.getPosition().then(pos => {
      this.userCurrentLatitude = pos.lat;
      this.userCurrentLongitude = pos.lng;
    });

    ////////////////////////////

    this.loadTradePersonsByJobTypeIdAndLngAndLat()
  }

  loadTradePersonsByJobTypeIdAndLngAndLat() {
    this.loadingService.mainLoader.next(true);
    this.tradePersonService.getTradePersonsByJobTypeAndLngAndLat(this.selectedJobTypeId,this.userCurrentLatitude,this.userCurrentLongitude).subscribe(response => {
      this.tradePersonList = response;
      this.loadingService.mainLoader.next(false);
    }, error => {
      this.loadingService.mainLoader.next(false);
      return;
    })
  }

  close() {
    this.dialogRef.close();
  }

  submitRequest() {
    this.loadingService.mainLoader.next(true);
    this.inquiryService.saveInquiry().subscribe(response => {
      this.tradePersonList = response;
      this.snackBarService.openSuccessSnackBar('Success', 'close')
      this.loadingService.mainLoader.next(false);
    }, error => {
      this.snackBarService.openErrorSnackBar('Something went wrong!', 'close')
      this.loadingService.mainLoader.next(false);
      return;
    })
  }

  selectedTradePersonFromList(tradePerson: any) {
    this.selectedTradePerson = tradePerson;
    console.log(this.selectedTradePerson)
  }

  onChooseLocation(event: any) {
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    this.locationChosen = true;
  }
}