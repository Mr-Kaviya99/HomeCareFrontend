import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  public login(email: string, password: string): Observable<any> {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    return this.http.post<any>(this.url + 'login', formData,
      {observe: 'response' as 'body'})
      .pipe(map(data => {
        return data;
      }));
  }

  public signup(
    firstName: string,
    lastName: string,
    email: string,
    mobile: string,
    password: string,
  ): Observable<any> {
    console.log(firstName, lastName, email, mobile, password)
    const formData = new FormData();
    formData.append('name', firstName);
    formData.append('name2', lastName);
    formData.append('email', email);
    formData.append('mobile', mobile);
    formData.append('password', password);
    return this.http.post(this.url + 'register', formData);
  }

  public verify(
    code: number,
    email: string
  ): Observable<any> {
    return this.http.post(this.url + 'user/verify?email=' + email + '&code=' + code, {});
  }

  public verifyReset(
    code: number,
    email: string
  ): Observable<any> {
    return this.http.post(this.url + 'user/verify-reset?email=' + email + '&code=' + code, {});
  }

  public resetPassword(
    code: number,
    email: string,
    password: string,
  ): Observable<any> {
    return this.http.post(this.url + 'user/reset-password?email=' + email + '&code=' + code + '&password=' + password, {});
  }

  public resend(
    email: string
  ): Observable<any> {
    return this.http.post(this.url + 'user/resend?email=' + email, {});
  }

  public forgotPasswordSendVerificationCode(
    email: string
  ): Observable<any> {
    return this.http.post(this.url + 'user/forgot-password-verify?email=' + email, {});
  }

  public getUserData(): Observable<any> {
    return this.http.get<any>(this.url + 'user');
  }

  public setAvatar(
    user: string,
    formData: any,
  ): Observable<any> {
    return this.http.post(this.url + 'user-avatar/user/manage?user=' + user, formData);
  }


}
