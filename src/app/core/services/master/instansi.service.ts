import {Instansi, IResponse} from '@app/models/';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {catchError, map} from 'rxjs/operators';
import 'rxjs/add/observable/throw';

@Injectable()
export class InstansiService {
  constructor(private http: HttpClient) {
  }

  getInstansi(): Observable<Instansi[]> {
    return this.http
      .get<IResponse<Instansi[]>>(`/emikro/v1/instansi/detail`)
      .pipe(
        map(r => r.data),
        catchError((error: any) => Observable.throw(error.json()))
      );
  }

  createInstansi(data: Instansi): Observable<Instansi> {
    return this.http
      .post<IResponse<Instansi>>(`/emikro/v1/instansi/insert`, data)
      .pipe(
        map(r => r.data),
        catchError((error: any) => Observable.throw(error.json()))
      );
  }

  updateInstansi(data: Instansi): Observable<Instansi> {
    return this.http
      .put<IResponse<Instansi>>(`/emikro/v1/instansi/ubah`, data)
      .pipe(
        map(r => r.data),
        catchError((error: any) => Observable.throw(error.json()))
      );
  }

  deleteInstansi(data: Instansi): Observable<Instansi> {
    return this.http
      .request<IResponse<Instansi>>('DELETE', `/emikro/v1/instansi/hapus`, {
        body: data
      }).pipe(
        map(r => r.data),
        catchError((error: any) => Observable.throw(error.json()))
      );
  }
}
