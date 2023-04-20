import {Injectable} from '@angular/core';
import {environment} from "../../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  private url = environment.baseUrl;

  constructor(
    private http: HttpClient,
  ) {
  }

  newReview(userId: any, requestId: any, starCount: string, comment: string): Observable<any> {
    const formData = new FormData();
    formData.append('user_id', userId);
    formData.append('request_id', requestId);
    formData.append('starCount', starCount);
    formData.append('comment', comment);
    return this.http.post<any>(this.url + 'review', formData)
  }

  getAllReviews(): Observable<any> {
    return this.http.get<any>(this.url + 'review')
  }
}
