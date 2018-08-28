import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Anggota, Golongan, Instansi} from '@app/models';
import * as fromStore from '@app/store';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-anggota-modal',
  templateUrl: './anggota-modal.component.html'
})
export class AnggotaModalComponent implements OnInit {
  anggota$: Observable<Anggota[]>;
  loading$: Observable<boolean>;
  instansi$: Observable<Instansi[]>;
  golongan$: Observable<Golongan[]>;
  selectedGolongan: any = 'SEMUA';
  selectedInstansi: any = 'SEMUA';
  status: any = 'SEMUA';
  input: string;
  @Input('show') showModal = false;
  @Output() onSelect = new EventEmitter<any>();
  @Output() onCancle = new EventEmitter<any>();

  constructor(private store: Store<fromStore.RootState>) {
  }
  cancle(){
    this.onCancle.emit(!this.showModal);
  }
  ngOnInit() {
    this.anggota$ = this.store.select(fromStore.getAllAnggota);
    this.loading$ = this.store.select(fromStore.getAnggotaIsLoading);
    this.instansi$ = this.store.select(fromStore.getAllInstansi);
    this.golongan$ = this.store.select(fromStore.getAllGolongan);
  }

  show(item) {
    this.input = item;
  }

  refresh() {
    this.anggota$ = this.store.select(fromStore.getAllAnggota)
      .pipe(
        map(x => x.filter(x => {
          if (this.selectedInstansi == 'SEMUA') {
            return true;
          }
          return x.KI == this.selectedInstansi.KI;
        })),
        map(x => x.filter(x => {
          if (this.selectedGolongan == 'SEMUA') {
            return true;
          }
          return x.GOLONGAN == this.selectedGolongan.GOLONGAN;
        })),
        map(x => x.filter(x => {
          if (this.status == 'SEMUA') {
            return true;
          }
          return x.ST == this.status;
        })),
      );
  }

  pilih(item) {
    const output = {
      input: this.input,
      payload: item
    };
    this.onSelect.emit(output);
  }
  close(){
    this.onCancle.emit(false);
  }
}
