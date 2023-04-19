import {Component, OnInit} from '@angular/core';
import {SnackBarService} from "../../../../../../../share/services/snack-bar/snack-bar.service";
import {TradePersonService} from "../../../../../../../share/services/trade-person/trade-person.service";

@Component({
  selector: 'app-all-trade-person',
  templateUrl: './all-trade-person.component.html',
  styleUrls: ['./all-trade-person.component.scss']
})
export class AllTradePersonComponent implements OnInit {

  allTradePersons: any

  constructor(
    private tradePersonService: TradePersonService,
    private snackBarService: SnackBarService,
  ) {
  }

  ngOnInit(): void {
    this.loadAllTradePersons()
  }

  loadAllTradePersons() {
    this.tradePersonService.getAllTradePersons().subscribe(response => {
      console.log(response)
      this.allTradePersons = response.data;
    }, error => {
      this.snackBarService.openErrorSnackBar('Something went wrong!', 'Close');
    })
  }
}
