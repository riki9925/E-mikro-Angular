import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import {catchError, map} from 'rxjs/operators';
import 'rxjs/add/observable/throw';

import {Account, IResponse} from '@app/models/index';

@Injectable()
export class AccountService {
  constructor(private http: HttpClient) {
  }

  getAccount(): Observable<Account[]> {
    return this.http
      .get<IResponse<Account[]>>(`/emikro/v1/setting/account/detail`)
      .pipe(
        map(r => r.data)
      );
  }

  createAccount(payload: Account): Observable<Account> {
    return this.http
      .post<IResponse<Account>>(`/emikro/v1/setting/account/insert`, payload)
      .pipe(
        map(r => r.data),
        catchError((error: any) => Observable.throw(error.json()))
      );
  }

  updateAccount(payload: Account): Observable<Account> {
    return this.http
      .put<IResponse<Account>>(`/emikro/v1/setting/account/ubah`, payload)
      .pipe(
        map(r => r.data),
        catchError((error: any) => Observable.throw(error.json()))
      );
  }

  removeAccount(payload: Account): Observable<Account> {
    return this.http
      .delete(`/emikro/v1/setting/account/delete`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
