import {IResponse, Struktur} from '@app/models/';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import {catchError, map} from 'rxjs/operators';
import 'rxjs/add/observable/throw';

@Injectable()
export class StrukturService {
  constructor(private http: HttpClient) {
  }

  getStruktur(): Observable<Struktur> {
    return this.http
      .get<IResponse<Struktur[]>>(`/emikro/v1/system/struktur/detail`)
      .pipe(
        map(r => r.data[0]),
        catchError((error: any) => Observable.throw(error.json()))
      );
  }

  updateStruktur(struktur: Struktur): Observable<Struktur> {
    return this.http
      .put<IResponse<Struktur[]>>(`/emikro/v1/system/struktur/ubah`, struktur)
      .pipe(
        map(r => r.data[0]),
        catchError((error: any) => Observable.throw(error.json()))
      );
  }
}
