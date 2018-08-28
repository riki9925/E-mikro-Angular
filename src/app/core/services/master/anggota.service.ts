import {Anggota, IResponse} from '@app/models/';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {catchError, map} from 'rxjs/operators';
import 'rxjs/add/observable/throw';

@Injectable()
export class AnggotaService {
  constructor(private http: HttpClient) {
  }

  getAnggota(): Observable<Anggota[]> {
    return this.http
      .get<IResponse<Anggota[]>>(`/emikro/v1/master/cib/detail`)
      .pipe(
        map(r => r.data),
        catchError((error: any) => Observable.throw(error.json()))
      );
  }

  createAnggota(data: Anggota): Observable<Anggota> {
    return this.http
      .post<IResponse<Anggota>>(`/emikro/v1/master/cib/insert`, data)
      .pipe(
        map(r => r.data),
        catchError((error: any) => Observable.throw(error.json()))
      );
  }

  updateAnggota(data: Anggota): Observable<Anggota> {
    return this.http
      .put<IResponse<Anggota>>(`/emikro/v1/master/cib/ubah`, data)
      .pipe(
        map(r => r.data),
        catchError((error: any) => Observable.throw(error.json()))
      );
  }

  deleteAnggota(data: Anggota): Observable<Anggota> {
    return this.http
      .request<IResponse<Anggota>>('DELETE', `/emikro/v1/master/cib/hapus`, {
        body: data
      }).pipe(
        map(r => r.data),
        catchError((error: any) => Observable.throw(error.json()))
      );
  }
}
