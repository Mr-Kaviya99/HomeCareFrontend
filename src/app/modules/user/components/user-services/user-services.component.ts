import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {GetHiredComponent} from "./inner-items/get-hired/get-hired.component";
import {JobTypeService} from "../../../share/services/job-type/job-type.service";
import {SnackBarService} from "../../../share/services/snack-bar/snack-bar.service";

@Component({
  selector: 'app-user-services',
  templateUrl: './user-services.component.html',
  styleUrls: ['./user-services.component.scss']
})
export class UserServicesComponent implements OnInit {

  allJobTypes: any

  constructor(
    private matDialog: MatDialog,
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

  getHired(id: any) {
    const popup = this.matDialog.open(GetHiredComponent, {
      width: '800px',
      data: {
        id: id
      }
    });
    popup.afterClosed().subscribe(data => {
      console.log(data)
      if (data) {

      }
    })
  }
}
