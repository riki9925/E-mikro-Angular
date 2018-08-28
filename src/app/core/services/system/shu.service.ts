import {IResponse, Shu} from '@app/models/';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import {catchError, map} from 'rxjs/operators';
import 'rxjs/add/observable/throw';

@Injectable()
export class ShuService {
  constructor(private http: HttpClient) {
  }

  getShu(): Observable<Shu> {
    return this.http
      .get<IResponse<Shu[]>>(`/emikro/v1/system/shu/detail`)
      .pipe(
        map(r => r.data[0]),
        catchError((error: any) => Observable.throw(error.json()))
      );
  }

  updateShu(data: Shu): Observable<Shu> {
    return this.http
      .put<IResponse<Shu>>(`/emikro/v1/system/shu/ubah`, data)
      .pipe(
        map(r => r.data[0]),
        catchError((error: any) => Observable.throw(error.json()))
      );
  }
}
