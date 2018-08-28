import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {Agama, Anggota, Golongan, HubunganKeluarga, Identitas, Instansi, Jabatan, Pekerjaan, Pendidikan} from '@app/models';
import * as fromStore from '@app/store';
import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-anggota-master',
  templateUrl: 'anggota-master.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AnggotaMasterComponent implements OnInit {
  loading$: Observable<boolean>;
  anggota$: Observable<Anggota[]>;
  selectedAnggota$: Observable<Anggota>;

  instansi$: Observable<Instansi[]>;
  hub_keluarga$: Observable<HubunganKeluarga[]>;
  agama$: Observable<Agama[]>;
  pendidikan$: Observable<Pendidikan[]>;
  pekerjaan$: Observable<Pekerjaan[]>;
  identitas$: Observable<Identitas[]>;
  golongan$: Observable<Golongan[]>;
  jabatan$: Observable<Jabatan[]>;

  constructor(private store: Store<fromStore.RootState>) {
  }

  ngOnInit() {
    this.loading$ = this.store.select(fromStore.getAnggotaIsLoading);
    this.anggota$ = this.store.select(fromStore.getAllAnggota);
    this.selectedAnggota$ = this.store.select(fromStore.getSelectedAnggota);


    this.instansi$ = this.store.select(fromStore.getAllInstansi);
    this.hub_keluarga$ = this.store.select(fromStore.getAllHubunganKeluarga);
    this.agama$ = this.store.select(fromStore.getAllAgama);
    this.pendidikan$ = this.store.select(fromStore.getAllPendidikan);
    this.pekerjaan$ = this.store.select(fromStore.getAllPekerjaan);
    this.identitas$ = this.store.select(fromStore.getAllIdentitas);
    this.golongan$ = this.store.select(fromStore.getAllGolongan);
    this.jabatan$ = this.store.select(fromStore.getAllJabatan);

  }

  create(item) {
    this.store.dispatch(new fromStore.AnggotaSelect(item));

  }

  edit(item) {
    this.store.dispatch(new fromStore.AnggotaSelect(item));

  }

  delete(item) {
    console.log('delete belum di buat');

  }

  approve(item) {
    console.log('apprive belum di buat');
    // this.store.dispatch(new fromStore.AnggotaUpdate(item));

  }

  update(item) {
    this.store.dispatch(new fromStore.AnggotaUpdate(item));

  }

  batal() {
    this.store.dispatch(new fromStore.AnggotaSelect(null));
  }

  save(item) {
    this.store.dispatch(new fromStore.AnggotaAdd(item));

  }
}
