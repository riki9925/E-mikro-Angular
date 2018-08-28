import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Account, Anggota, Instansi, JenisSimpanan, MasterSimpanan} from '@app/models';
import {Store} from '@ngrx/store';
import * as fromStore from '@app/store';

@Component({
  selector: 'app-pindah-buku-simpanan',
  templateUrl: './pindah-buku-simpanan.component.html',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class PindahBukuSimpananComponent implements OnInit {
  master$: Observable<MasterSimpanan[]>;
  jenis$: Observable<any>;
  account$: Observable<any>;
  anggota$: Observable<any>;
  instansi$: Observable<any>;

  constructor(private store: Store<fromStore.RootState>) {
    this.master$ = this.store.select(fromStore.getAllMasterSimpanan);
    this.jenis$ = this.store.select(fromStore.getJenisSimpananEntity);
    this.account$ = this.store.select(fromStore.getAccountEntity);
    this.anggota$ = this.store.select(fromStore.getAnggotaEntity);
    this.instansi$ = this.store.select(fromStore.getInstansiEntity);
  }

  ngOnInit() {

  }

  refresh(){
    this.store.dispatch(new fromStore.MasterSimpananLoad);
  }

}
