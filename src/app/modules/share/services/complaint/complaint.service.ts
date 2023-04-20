import {Injectable} from '@angular/core';
import {environment} from "../../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {
  private url = environment.baseUrl;

  constructor(
    private http: HttpClient,
  ) {
  }

  newComplaint(userId: any, jobType: any, tradePerson: any, complaint: string) {
    console.log(userId + ' ' + jobType+ ' ' + tradePerson + ' ' + complaint)
    const formData = new FormData();
    formData.append('user_id', userId);
    formData.append('jobType_id', jobType);
    formData.append('tradePerson_id', tradePerson);
    formData.append('complaint', complaint);
    return this.http.post<any>(this.url + 'complaint', formData)
  }

  getAllComplaints() {
    return this.http.get<any>(this.url + 'complaint')
  }

  getComplaintsByTradePersonId(tradePersonId: any): Observable<any> {
    return this.http.get<any>(this.url + 'complaint/search/' + tradePersonId)
  }
}
