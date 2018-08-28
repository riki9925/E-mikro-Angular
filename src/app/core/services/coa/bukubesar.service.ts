import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {catchError, map} from 'rxjs/operators';
import 'rxjs/add/observable/throw';

import {BukuBesar, IResponse} from '@app/models/';

@Injectable()
export class BukubesarService {
  constructor(private http: HttpClient) {
  }

  getBukabesar(): Observable<BukuBesar[]> {
    return this.http
      .get<IResponse<BukuBesar[]>>(`/emikro/v1/setting/accountbb/detail`)
      .pipe(
        map(r => r.data),
        // catchError((error: any) => Observable.throw(error.json()))
      );
  }

  createBukubesar(payload: BukuBesar): Observable<BukuBesar> {
    return this.http
      .post<IResponse<BukuBesar>>(`/emikro/v1/setting/accountbb/insert`, payload)
      .pipe(
        map(r => r.data),
        catchError((error: any) => Observable.throw(error.json())));
  }

  updateBukubesar(payload: BukuBesar): Observable<BukuBesar> {
    return this.http
      .put<IResponse<BukuBesar>>(`/emikro/v1/setting/accountbb/ubah`, payload)
      .pipe(
        map(r => r.data),
        catchError((error: any) => Observable.throw(error.json())));
  }

  removeBukubesar(payload: BukuBesar): Observable<BukuBesar> {
    return this.http
      .delete<any>(`/emikro/v1/setting/accountbb/hapus`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
