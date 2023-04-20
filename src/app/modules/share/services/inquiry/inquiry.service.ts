import {Injectable} from '@angular/core';
import {environment} from "../../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InquiryService {
  private url = environment.baseUrl;

  constructor(
    private http: HttpClient,
  ) {
  }

  saveInquiry(userId: any, tradePersonId: any, selectedJobTypeId: any): Observable<any> {
    const formData = new FormData();
    formData.append('user_id', userId);
    formData.append('tradePerson_id', tradePersonId);
    formData.append('jobType_id', selectedJobTypeId);
    formData.append('isAccepted', 'false');

    return this.http.post<any>(this.url + 'serviceRequest', formData)
  }

  getServiceRequestByUserId(userId: any):Observable<any> {
    return this.http.get<any>(this.url + 'serviceRequest/getServiceByUserId/' + userId)
  }
  getServiceRequestByTradePersonId(tradepersonId: any):Observable<any> {
    return this.http.get<any>(this.url + 'serviceRequest/getServiceByTradePersonId/' + tradepersonId)
  }
}
