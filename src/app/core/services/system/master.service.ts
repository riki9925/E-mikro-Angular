import {Agama, Golongan, HubunganKeluarga, Identitas, IResponse, Jabatan, Pekerjaan, Pendidikan} from '@app/models/';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import {catchError, map} from 'rxjs/operators';
import 'rxjs/add/observable/throw';

@Injectable()
export class MasterService {
  constructor(private http: HttpClient) {
  }

  getAllPendidikan(): Observable<Pendidikan[]> {
    return this.http
      .get<IResponse<Pendidikan[]>>(`/emikro/v1/pendidikan/detail`)
      .pipe(
        map(r => r.data),
        catchError((error: any) => Observable.throw(error.json()))
      );
  }

  getAllJabatan(): Observable<Jabatan[]> {
    return this.http
      .get<IResponse<Jabatan[]>>(`/emikro/v1/jabatan/detail`)
      .pipe(
        map(r => r.data),
        catchError((error: any) => Observable.throw(error.json()))
      );
  }

  getAllGolongan(): Observable<Golongan[]> {
    return this.http
      .get<IResponse<Golongan[]>>(`/emikro/v1/golongan/detail`)
      .pipe(
        map(r => r.data),
        catchError((error: any) => Observable.throw(error.json()))
      );
  }

  getAllAgama(): Observable<Agama[]> {
    return this.http
      .get<IResponse<Agama[]>>(`/emikro/v1/agama/detail`)
      .pipe(
        map(r => r.data),
        catchError((error: any) => Observable.throw(error.json()))
      );
  }

  getAllIdentitas(): Observable<Identitas[]> {
    return this.http
      .get<IResponse<Identitas[]>>(`/emikro/v1/identitas/detail`)
      .pipe(
        map(r => r.data),
        catchError((error: any) => Observable.throw(error.json()))
      );
  }

  getAllPekerjaan(): Observable<Pekerjaan[]> {
    return this.http
      .get<IResponse<Pekerjaan[]>>(`/emikro/v1/pekerjaan/detail`)
      .pipe(
        map(r => r.data),
        catchError((error: any) => Observable.throw(error.json()))
      );
  }

  getAllHubunganKeluarga(): Observable<HubunganKeluarga[]> {
    return this.http
      .get<IResponse<HubunganKeluarga[]>>(`/emikro/v1/keluarga/detail`)
      .pipe(
        map(r => r.data),
        catchError((error: any) => Observable.throw(error.json()))
      );
  }
}
