import {IResponse, JenisSimpanan} from '@app/models/';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {catchError, map} from 'rxjs/operators';
import 'rxjs/add/observable/throw';

@Injectable()
export class JenisSimpananService {
  constructor(private http: HttpClient) {
  }

  getJenisSimpanan(): Observable<JenisSimpanan[]> {
    return this.http
      .get<IResponse<JenisSimpanan[]>>(`/emikro/v1/jenissim/detail`)
      .pipe(
        map(r => r.data),
        catchError((error: any) => Observable.throw(error.json()))
      );
  }

  createJenisSimpanan(data: JenisSimpanan): Observable<JenisSimpanan> {
    return this.http
      .post<IResponse<JenisSimpanan>>(`/emikro/v1/jenissim/insert`, data)
      .pipe(
        map(r => r.data),
        catchError((error: any) => Observable.throw(error.json()))
      );
  }

  updateJenisSimpanan(data: JenisSimpanan): Observable<JenisSimpanan> {
    return this.http
      .put<IResponse<JenisSimpanan>>(`/emikro/v1/jenissim/ubah`, data)
      .pipe(
        map(r => r.data),
        catchError((error: any) => Observable.throw(error.json()))
      );
  }

  deleteJenisSimpanan(data: JenisSimpanan): Observable<JenisSimpanan> {
    return this.http
      .request<IResponse<JenisSimpanan>>('DELETE', `/emikro/v1/jenissim/hapus`, {
        body: data
      }).pipe(
        map(r => r.data),
        catchError((error: any) => Observable.throw(error.json()))
      );
  }
}
