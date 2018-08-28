import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {Anggota, Golongan, Instansi} from '@app/models';
import * as fromStore from '@app/store';

@Component({
  selector: 'list-anggota',
  templateUrl: 'list-anggota.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListAnggotaComponent implements OnInit {
  anggota$: Observable<Anggota[]>;
  instansi$: Observable<Instansi[]>;
  selectedInstansi: any = 'SEMUA';
  @Input() prop: string;
  @Output() onSelect = new EventEmitter<any>();

  constructor(private store: Store<fromStore.RootState>) {
  }
  ngOnInit() {
    this.anggota$ = this.store.select(fromStore.getAllActiveAnggota);
    this.instansi$ = this.store.select(fromStore.getAllInstansi);
  }

  refresh() {
    this.anggota$ = this.store.select(fromStore.getAllAnggota)
      .pipe(
        map(x => x.filter(r => {
          if (this.selectedInstansi === 'SEMUA') {
            return true;
          }
          return r.KI === this.selectedInstansi.KI;
        }))
      );
  }

  pilih(item) {
    const output = {
      input: this.prop,
      payload: item
    };
    this.onSelect.emit(output);
  }
}
