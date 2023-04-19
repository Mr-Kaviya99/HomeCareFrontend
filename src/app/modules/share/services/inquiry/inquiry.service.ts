import {Injectable} from '@angular/core';
import {environment} from "../../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {CookieManagerService} from "../cookie/cookie-manager.service";

@Injectable({
  providedIn: 'root'
})
export class InquiryService {
  private url = environment.baseUrl;

  constructor(
    private http: HttpClient,
    private cookieManager: CookieManagerService,
  ) {
  }

  saveInquiry() {
    return this.http.post(this.url + '' , {})
  }
}
