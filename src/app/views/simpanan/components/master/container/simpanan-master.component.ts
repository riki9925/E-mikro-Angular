import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Account, Anggota, Instansi, JenisSimpanan, MasterSimpanan} from '@app/models';
import {Store} from '@ngrx/store';
import * as fromStore from '@app/store';

@Component({
  selector: 'app-simpanan-master',
  templateUrl: './simpanan-master.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpananMasterComponent implements OnInit {
  master$: Observable<MasterSimpanan[]>;
  jenis$: Observable<any>;
  instansi$: Observable<any>;
  loading$: Observable<boolean>;

  constructor(private store: Store<fromStore.RootState>) {
    this.master$ = this.store.select(fromStore.getAllMasterSimpanan);
    this.jenis$ = this.store.select(fromStore.getAllJenisSimpanan);
    this.instansi$ = this.store.select(fromStore.getAllInstansi);
    this.loading$ = this.store.select(fromStore.getMasterSimpananIsLoading);
  }

  ngOnInit() {

  }
  refresh(){
    this.store.dispatch(new fromStore.MasterSimpananLoad);
  }
}
