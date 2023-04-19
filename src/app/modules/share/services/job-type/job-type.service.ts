import {Injectable} from '@angular/core';
import {environment} from "../../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class JobTypeService {

  private url = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  getJobTypeIdAndName(): Observable<any> {
    return this.http.get(this.url + '')
  }

  getAllJobTypes(): Observable<any> {
    return this.http.get<any>(this.url + 'jobType')
  }

  newJobType(typeName: string, typeImage: string): Observable<any> {
    const formData = new FormData();
    formData.append('jobType', typeName);
    formData.append('image', typeImage);
    return this.http.post<any>(this.url + 'jobType', formData)
  }
}
