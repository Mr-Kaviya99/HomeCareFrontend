import {Injectable} from '@angular/core';
import {environment} from "../../../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {CookieManagerService} from "../cookie/cookie-manager.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = environment.baseUrl;

  constructor(
    private http: HttpClient,
    private cookieManager: CookieManagerService,
  ) {

  }

  getUserData(): Observable<any> {
    let headers = new HttpHeaders({'Authorization': 'Bearer ' + this.cookieManager.getToken()});
    return this.http.get<any>(this.url + 'user', {headers: headers})
  }
}
