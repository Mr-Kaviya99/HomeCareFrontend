import {Injectable} from '@angular/core';
import {environment} from "../../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TradePersonService {
  private url = environment.baseUrl;

  constructor(
    private http: HttpClient,
  ) {
  }

  getTradePersonsByJobTypeAndLngAndLat(selectedJobTypeId: any, userCurrentLatitude: any, userCurrentLongitude: any): Observable<any> {
    return this.http.get<any>(this.url + `tradePerson/search/${selectedJobTypeId}/${userCurrentLatitude}/${userCurrentLongitude}`)
  }


  newTradePerson(userId: any, jobType: string, gender: string, nic: string, latitude: any, longitude: any) {
    const formData = new FormData();
    formData.append('user_id', userId);
    formData.append('jobType_id', jobType);
    formData.append('gender', gender);
    formData.append('nic', nic);
    formData.append('latitude', latitude);
    formData.append('longitude', longitude);
    return this.http.post<any>(this.url + 'tradePerson', formData)
  }

  getAllTradePersonsByJobTypeId(jobTypeId: any) {
    return this.http.get<any>(this.url + 'tradePerson/search/' + jobTypeId)
  }

  getAllTradePersons(): Observable<any> {
    return this.http.get<any>(this.url + 'tradePerson')
  }

  getTradePersonByUserId(user_id: any) {
    return this.http.get<any>(this.url + 'tradePerson/searchUser/' + user_id)
  }

  getTradePersonAllData(tradePersonId: any) {
    return this.http.get<any>(this.url + 'tradePerson/getAll/' + tradePersonId)
  }
}
