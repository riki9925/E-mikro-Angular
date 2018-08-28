import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {JenisSimpanan, MasterSimpanan} from '@app/models';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import * as fromStore from '@app/store';
@Component({
  selector: 'informasi-simpanan',
  templateUrl: 'informasi-simpanan.component.html',
  changeDetection:ChangeDetectionStrategy.OnPush
})

export class InformasiSimpananComponent implements OnInit {
  simpanan: MasterSimpanan;
  @Input('simpanan')
  set setSimpanan(simpanan: MasterSimpanan) {
    if (simpanan) {
      this.simpanan = simpanan;
      this.store.select(fromStore.selectJenisSimpanan(this.simpanan.ACC)).subscribe(r => {
        this.jenis = r;
      });
    } else {
      this.simpanan = <MasterSimpanan>{};
    }
  }
  jenis: JenisSimpanan;
  constructor(private store: Store<fromStore.RootState>) {
  }

  ngOnInit() {
  }
}
