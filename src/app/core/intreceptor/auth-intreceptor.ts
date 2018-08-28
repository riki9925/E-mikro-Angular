import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import {Location} from '@angular/common';
import {LoadingService} from '@core/services/utils/loading.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private location: Location, private loading: LoadingService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = {
      token: ''
    };
    if (localStorage.getItem('session') !== null) {
      token = JSON.parse(localStorage.getItem('session'));
    }
    const authReq = req.clone({
      headers: req.headers.set('Authorization', token.token || '')
    });
    this.loading.showLoading();
    return next.handle(authReq).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        // do stuff with response if you want
        this.loading.hideLoading();
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          this.toLoginPage();
        }
      }
    });
  }
  toLoginPage() {
    this.location.go('/auth');
  }
}
