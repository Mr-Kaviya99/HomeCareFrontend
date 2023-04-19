import {Injectable} from '@angular/core';
import {environment} from "../../../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TradePersonService {
  private url = environment.baseUrl;

  constructor(
    private http: HttpClient,
  ) {
  }

  getTradePersonsByJobTypeAndLngAndLat(selectedJobTypeId: any, userCurrentLatitude: any, userCurrentLongitude: any) {
    return this.http.get(this.url + '' + selectedJobTypeId)
  }

}
