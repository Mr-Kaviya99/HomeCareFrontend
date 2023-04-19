import {Component, OnInit} from '@angular/core';
import {JobTypeService} from "../../../../../../../share/services/job-type/job-type.service";
import {SnackBarService} from "../../../../../../../share/services/snack-bar/snack-bar.service";

@Component({
  selector: 'app-all-job-type',
  templateUrl: './all-job-type.component.html',
  styleUrls: ['./all-job-type.component.scss']
})
export class AllJobTypeComponent implements OnInit {

  allJobTypes: any

  constructor(
    private jobTypeService: JobTypeService,
    private snackBarService: SnackBarService,
  ) {
  }

  ngOnInit(): void {
    this.loadAllJobTypes()
  }

  loadAllJobTypes() {
    this.jobTypeService.getAllJobTypes().subscribe(response => {
      this.allJobTypes = response.data;
    }, error => {
      this.snackBarService.openErrorSnackBar('Something went wrong!', 'Close');
    })
  }
}
