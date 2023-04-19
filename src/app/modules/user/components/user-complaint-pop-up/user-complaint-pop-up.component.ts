import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-user-complaint-pop-up',
  templateUrl: './user-complaint-pop-up.component.html',
  styleUrls: ['./user-complaint-pop-up.component.scss']
})
export class UserComplaintPopUpComponent implements OnInit {

  tradePerson: any = [
    {
      tradePersonId: 1,
      tradePersonName: 'Kavindu'
    },
    {
      tradePersonId: 2,
      tradePersonName: 'Hiruni'
    },
    {
      tradePersonId: 3,
      tradePersonName: 'Ridmi'
    }
  ]

  jobType: any = [
    {
      jobTypeId: 1,
      jobTypeName: 'PAINTER'
    },
    {
      jobTypeId: 2,
      jobTypeName: 'CARPENTER',
    },
    {
      jobTypeId: 3,
      jobTypeName: 'CLEANER',
    },
    {
      jobTypeId: 4,
      jobTypeName: 'ELECTRICIAN',
    },
    {
      jobTypeId: 5,
      jobTypeName: 'GARDNER',
    },
    {
      jobTypeId: 6,
      jobTypeName: 'HOME CARE TAKERS',
    },
    {
      jobTypeId: 7,
      jobTypeName: 'MASON',
    },
    {
      jobTypeId: 8,
      jobTypeName: 'PLUMBER',
    },
  ]

  constructor(
    public dialogRef: MatDialogRef<UserComplaintPopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
  }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }
}
