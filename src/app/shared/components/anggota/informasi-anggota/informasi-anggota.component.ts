import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Anggota, Instansi, MasterSimpanan} from '@app/models';
import {Store} from '@ngrx/store';
import * as fromStore from '@app/store';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'informasi-anggota',
  templateUrl: 'informasi-anggota.component.html',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class InformasiAnggotaComponent implements OnInit {
  anggota: Anggota;

  @Input('anggota')
  set setAnggota(anggota: Anggota) {
    if (anggota) {
      this.anggota = anggota;
      this.instansi$ = this.store.select(fromStore.selectInstansi(this.anggota.KI));
    }else{
      this.anggota = <Anggota>{};
    }
  }
  instansi$: Observable<Instansi>;
  constructor(private store: Store<fromStore.RootState>) {
  }

  ngOnInit() {
  }
}
