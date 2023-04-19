import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  public mainLoader: BehaviorSubject<unknown> = new BehaviorSubject<unknown>(false);

  constructor() { }
}
