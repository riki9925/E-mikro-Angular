import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import {catchError, map} from 'rxjs/operators';
import 'rxjs/add/observable/throw';

import {IResponse, Jenis} from '@app/models/';

@Injectable()
export class JenisService {
  constructor(private http: HttpClient) {
  }

  getJenis(): Observable<Jenis[]> {
    return this.http
      .get<IResponse<Jenis[]>>(`/emikro/v1/setting/accjenis/detail`)
      .pipe(
        map(r => r.data),
        catchError((error: any) => Observable.throw(error.json()))
      );
  }
}
