import {IResponse, UnitBisnis} from '@app/models/';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import {catchError, map} from 'rxjs/operators';
import 'rxjs/add/observable/throw';

@Injectable()
export class UnitBisnisService {
  constructor(private http: HttpClient) {
  }

  getUnitBisnis(): Observable<UnitBisnis[]> {
    return this.http
      .get<IResponse<UnitBisnis[]>>(`/emikro/v1/system/unit/detail`)
      .pipe(
        map(r => r.data),
        catchError((error: any) => Observable.throw(error.json()))
      );
  }

  updateUnitBisnis(data: UnitBisnis): Observable<UnitBisnis> {
    return this.http
      .put<IResponse<UnitBisnis>>(`/emikro/v1/system/unit/ubah`, data)
      .pipe(
        map(r => r.data),
        catchError((error: any) => Observable.throw(error.json()))
      );
  }
}
