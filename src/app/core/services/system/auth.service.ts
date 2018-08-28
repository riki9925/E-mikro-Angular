import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {catchError} from 'rxjs/operators';
import 'rxjs/add/observable/throw';
import {IResponse} from '@app/models/';


@Injectable()
export class AuthService {
  private token: string;

  constructor(private http: HttpClient) {
  }

  performLogin(payload: any) {
    const body = {
      username: payload.username,
      password: payload.password
    };
    return this.http
      .post(`/emikro/auth/login`, body)
      .pipe(
        catchError((error: any) => Observable.throw(error))
      );
  }
}
