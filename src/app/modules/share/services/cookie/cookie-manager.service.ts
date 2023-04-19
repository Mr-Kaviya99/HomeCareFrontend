import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CookieManagerService {

  constructor(private cookieService: CookieService) {

  }

  public setToken(token: string) {
    this.cookieService.set('token', token, 90);
  }

  public tokenIsExists(name: string):boolean {
    return this.cookieService.check(name);
  }
  public getToken():string {
    return this.cookieService.get('token');
  }

  public setPersonalData(data:any){
    this.cookieService.set('data',JSON.stringify(data),90);
  }

  public personalDataIsExists():boolean{
    return this.cookieService.check('data');
  }
  public getPersonalData():string {
    return this.cookieService.get('data');
  }

  public setDeveloperId(id:string){
    this.cookieService.set('developerId',id,90);
  }

  public developerIdIsExists():boolean{
    return this.cookieService.check('developerId');
  }
  public getDeveloperId():string {
    return this.cookieService.get('developerId');
  }

  public setStudentId(id:string){
    this.cookieService.set('studentId',id,90);
  }

  public studentIdIsExists():boolean{
    return this.cookieService.check('studentId');
  }
  public getStudentId():string {
    return this.cookieService.get('studentId');
  }

  logout(){
    this.cookieService.deleteAll();
  }

}
