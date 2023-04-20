import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest,} from '@angular/common/http';
import {finalize, Observable} from 'rxjs';
import {Router} from "@angular/router";
import {LoadingService} from "../services/loading/loading.service";

@Injectable()
export class HttpHandlerInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private _loadingService: LoadingService,
  ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this._loadingService.mainLoader.next(true);
    return next.handle(request).pipe(
      finalize(() => {
        this._loadingService.mainLoader.next(false);
      })
    );
  }

}
