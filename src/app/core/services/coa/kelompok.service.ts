import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import {catchError, map} from 'rxjs/operators';
import 'rxjs/add/observable/throw';
import {IResponse, Kelompok} from '@app/models/';

@Injectable()
export class KelompokService {
  constructor(private http: HttpClient) {
  }

  getKelompok(): Observable<Kelompok[]> {
    return this.http
      .get<IResponse<Kelompok[]>>(`/emikro/v1/setting/acckel/detail`)
      .pipe(
        map(r => r.data),
        catchError((error: any) => Observable.throw(error.json()))
      );
  }
}
