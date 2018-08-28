import {IResponse, JenisSimpanan, MasterSimpanan} from '@app/models';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {catchError, map} from 'rxjs/operators';
import 'rxjs/add/observable/throw';
import {of} from 'rxjs/observable/of';

@Injectable()
export class MasterSimpananService {
  constructor(private http: HttpClient) {
  }

  getMasterSimpanan(): Observable<MasterSimpanan[]> {
    return this.http
      .get<IResponse<MasterSimpanan[]>>(`/emikro/v1/simpanan/detail`)
      .pipe(
        map(r => r.data),
        catchError((error: any) => Observable.throw(error.json()))
      );
  }

  createMasterSimpanan(data: MasterSimpanan): Observable<MasterSimpanan> {
    return this.http
      .post<IResponse<MasterSimpanan>>(`/emikro/v1/simpanan/insert`, data)
      .pipe(
        map(r => r.data),
        catchError((error: any) => Observable.throw(error.json()))
      );
  }

  updateMasterSimpanan(data: MasterSimpanan): Observable<MasterSimpanan> {
    return this.http
      .put<IResponse<MasterSimpanan>>(`/emikro/v1/simpanan/ubah`, data)
      .pipe(
        map(r => r.data),
        catchError((error: any) => Observable.throw(error.json()))
      );
  }

  deleteMasterSimpanan(data: MasterSimpanan): Observable<MasterSimpanan> {
    return this.http
      .request<IResponse<MasterSimpanan>>('DELETE', `/emikro/v1/simpanan/hapus`, {
        body: data
      }).pipe(
        map(r => r.data),
        catchError((error: any) => Observable.throw(error.json()))
      );
  }

  postingSimpananPokok(params: any) {
    return this.http
      .post<IResponse<any>>(`/emikro/v1/simpanan/setoran_pokok`, params)
      .pipe(
        map(r => r.data),
        catchError((error: any) => of(error.error))
      );
  }

  postingSetoranSimpananAnggota(params: any) {
    return this.http
      .post<IResponse<any>>(`/emikro/v1/simpanan/setoran_anggota`, params)
      .pipe(
        map(r => r.data),
        catchError((error: any) => of(error.error))
      );
  }

  postingPenarikanSimpanan(params: any) {
    return this.http
      .post<IResponse<any>>(`/emikro/v1/simpanan/penarikan_simpanan`, params)
      .pipe(
        map(r => r.data),
        catchError((error: any) => of(error.error))
      );
  }
  postingPendebetanSimpanan(params: any) {
    return this.http
      .post<IResponse<any>>(`/emikro/v1/simpanan/pendebetan_simpanan`, params)
      .pipe(
        map(r => r.data),
        catchError((error: any) => of(error.error))
      );
  }

  postingPengkreditanSimpanan(params: any) {
    return this.http
      .post<IResponse<any>>(`/emikro/v1/simpanan/pengkreditan_simpanan`, params)
      .pipe(
        map(r => r.data),
        catchError((error: any) => of(error.error))
      );
  }

  postingPengkreditanBundaDanJasa(params: any) {
    return this.http
      .post<IResponse<any>>(`/emikro/v1/simpanan/pengkreditan_bunga_jasa`, params)
      .pipe(
        map(r => r.data),
        catchError((error: any) => of(error.error))
      );
  }

  postingPendebetanBiayaAdmin(params: any) {
    return this.http
      .post<IResponse<any>>(`/emikro/v1/simpanan/pendebetan_biaya_admin`, params)
      .pipe(
        map(r => r.data),
        catchError((error: any) => of(error.error))
      );
  }
}
