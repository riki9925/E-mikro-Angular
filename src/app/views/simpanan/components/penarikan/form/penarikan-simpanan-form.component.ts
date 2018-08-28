import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {BaseComponent} from '@app/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Account, Anggota, Instansi, JenisSimpanan, MasterSimpanan} from '@app/models';
import * as fromService from '@app/core';

@Component({
  selector: 'app-penarikan-simpanan-form',
  templateUrl: './penarikan-simpanan-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PenarikanSimpananFormComponent extends BaseComponent implements OnInit {
  jenis: JenisSimpanan;
  selectedAnggota: Anggota;
  master: MasterSimpanan[];
  @Input() account: any;
  @Input() jeniss: any;
  @Input() masters: MasterSimpanan[];
  @Input() anggota: any;
  acc: Account[];
  form: FormGroup;
  total = 0;
  items: FormArray;
  show = false;
  KBT: string;
  @Output('refresh') refreshEvent = new EventEmitter<any>();

  constructor(private fb: FormBuilder,
              private cf : ChangeDetectorRef,
              private service: fromService.MasterSimpananService,
              private msgService : fromService.MessageService
  ) {
    super();
    this.form = this.fb.group({
      CIB: [null, [Validators.required]],
      ACC: [null, [Validators.required]],
      TRANSAKSI: this.fb.array([this.createItem({})]),
      NOMINAL: [null, [Validators.required]],
      KETERANGAN: [null, [Validators.required]],
      BERITA: [null, [Validators.required]]
    });

  }

  get TRANSAKSI(): FormArray {
    return this.form.get('TRANSAKSI') as FormArray;
  }

  ngOnInit() {
    this.form.get('CIB').valueChanges.subscribe(r => {
      if (r !== null) {
        this.master = undefined;
        this.selectedAnggota = this.anggota[r];
        this.master = this.masters.filter(f => {
          f = {
            ...f,
            NOMINAL: '0'
          };
          return f.CIB === this.selectedAnggota.CIB;
        });
        this.empty();
        this.master.forEach(e => {
          this.addItem(e);
        });
      }
    });
    this.form.get('TRANSAKSI').valueChanges.subscribe(r => {
      this.total = 0;
      r.forEach(e => {
        this.total = this.total + parseInt(e.NOMINAL);
        this.form.patchValue({
          NOMINAL: this.total
        });
      });
    });
  }
  baru() {
    this.master = null;
    this.jenis = null;
    this.selectedAnggota = null;
    this.form.reset();
    this.empty();
  }
  onCancle(item) {
    this.show = item;
  }
  createItem(item): FormGroup {
    return this.fb.group({
      NOSIMP: [item.NOSIMP],
      ACC: [item.ACC],
      KETERANGAN: [item.KETERANGAN],
      BLOKIR: [item.BLOKIR],
      SALDO: [item.SALDO],
      NOMINAL: [0],
    });
  }

  addItem(item): void {
    this.items = this.form.get('TRANSAKSI') as FormArray;
    this.items.push(this.createItem(item));
  }

  empty() {
    this.items = this.form.get('TRANSAKSI') as FormArray;
    for (let i = 0; i < this.items.length; i++) {
      this.items.removeAt(i);
    }
  }

  onChangeJenisRekening(item) {
    if (item.target.value !== '') {
      this.acc = Object.keys(this.account).map(id => this.account[id]).filter(x => {
        if (x.ACC.startsWith(item.target.value)) {
          return x;
        }
        if (item.target.value === '1101') {
          this.KBT = 'BKK';
        } else if (item.target.value === '1102') {
          this.KBT = 'BBK';
        } else {
          this.KBT = '';
        }
        return false;
      });
      const payload = {
        BERITA: 'PENARIKAN REK. SIMP A/N' + this.selectedAnggota.NAMA,
        KETERANGAN: 'PENARIKAN REK. SIMP A/N' + this.selectedAnggota.NAMA
      };
      this.form.patchValue(payload);
    }
  }
  getForm() {
    return this.form;
  }

  fromModal(event) {
    this.show = false;
    const obj = {};
    obj[event.input] = event.payload.CIB;
    this.form.patchValue(obj);
  }


  posting() {
    let payload = {};
    payload = {
      ...payload,
      ...this.selectedAnggota,
      ...this.form.value,
      KU: 10,
      KBT: this.KBT
    };
    this.service.postingPenarikanSimpanan(payload)
      .subscribe(r => {
        this.msgService.sendMessage({
          type: 'alert-success',
          message: 'Transaksi Berhasil'
        });
      }, err => {
        this.msgService.sendMessage({
          type: 'alert-danger',
          message: 'Transaksi Gagal'
        });
      },()=> {
        this.baru();
        this.cf.detectChanges();
        this.refreshEvent.emit('');
      });
  }

}
