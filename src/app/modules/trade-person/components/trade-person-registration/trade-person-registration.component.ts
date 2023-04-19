import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, Validators} from "@angular/forms";
import {JobTypeService} from "../../../share/services/job-type/job-type.service";
import {LoadingService} from "../../../share/services/loading/loading.service";
import {LocationService} from "../../../share/services/locaion/location.service";

@Component({
  selector: 'app-trade-person-registration',
  templateUrl: './trade-person-registration.component.html',
  styleUrls: ['./trade-person-registration.component.scss']
})
export class TradePersonRegistrationComponent implements OnInit {

  tradePersonForm = new FormGroup({
    jobType: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    nic: new FormControl('', [Validators.required,]),
    longitude: new FormControl('', [Validators.required]),
    latitude: new FormControl('', [Validators.required]),
  });
  longitude: any;
  latitude: any;
  locationChosen = false;
  jobTypeIdAndName: any;
  zoom: number = 10;

  constructor(
    private jobTypeService: JobTypeService,
    private loadingService: LoadingService,
    private locationService: LocationService
  ) {
  }

  ngOnInit(): void {
    this.locationService.getPosition().then(pos => {
      this.latitude = pos.lat;
      this.longitude = pos.lng;
    });
    this.loadJobTypeIdAndName()
  }

  clearForm(f: FormGroupDirective) {

  }

  loadJobTypeIdAndName() {
    this.loadingService.mainLoader.next(true);
    this.jobTypeService.getJobTypeIdAndName().subscribe(response => {
      this.jobTypeIdAndName = response.data;
      this.loadingService.mainLoader.next(false);
    }, error => {
      this.loadingService.mainLoader.next(false);
      return;
    })
  }

  applyTradePerson(f: FormGroupDirective) {

  }

  onChooseLocation(event: any) {
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    this.locationChosen = true;
  }
}
