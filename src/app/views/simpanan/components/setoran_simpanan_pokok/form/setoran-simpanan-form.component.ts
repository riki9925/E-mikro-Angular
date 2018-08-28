import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import * as fromService from '@app/core';
import {BaseComponent} from '@app/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Account, Anggota, JenisSimpanan, MasterSimpanan} from '@app/models';

@Component({
  selector: 'app-simpanan-setoran-form',
  templateUrl: './setoran-simpanan-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpananSetoranFormComponent extends BaseComponent implements OnInit {
  @ViewChild('cariAnggotaModal') modal;
  jenis: JenisSimpanan;
  master: MasterSimpanan;
  @Input() account: any;
  @Input() jeniss: JenisSimpanan[];
  @Input() masters: MasterSimpanan[];
  @Input() anggota: any;
  selectedAnggota: Anggota;
  acc: Account[];
  form: FormGroup;
  modal_anggota = false;
  KBT;
  @Output('refresh') refreshEvent = new EventEmitter<any>();

  constructor(
    private cf: ChangeDetectorRef,
    private msgService: fromService.MessageService,
    private fb: FormBuilder,
    private service: fromService.MasterSimpananService) {
    super();
    this.form = this.fb.group({
      CIB: [null, [Validators.required]],
      NOMINAL: [null, [Validators.required]],
      KETERANGAN: [null, [Validators.required]],
      ACC: [null, [Validators.required]],
      BERITA: [null, [Validators.required]]
    });

  }
  ngOnInit() {
    this.form.get('CIB').valueChanges.subscribe(r => {
      if (r !== null) {
        this.master = undefined;
        this.selectedAnggota = this.anggota[r];
        this.jenis = this.jeniss.filter(x => {
          return x.KST === 1;
        })[0];
        this.master = this.masters.filter(f => {
          return f.CIB === this.selectedAnggota.CIB && this.jenis.ACC === f.ACC;
        })[0];
        if (this.master !== undefined) {
          this.modal_anggota = false;
        } else {
          this.baru();
          this.msgService.sendMessage({
            type: 'alert-danger',
            message: 'Anggota masih belum memiliki simpanan pokok'
          });
        }
      }
    });

  }


  baru() {
    this.master = null;
    this.jenis = null;
    this.selectedAnggota = null;
    this.form.reset();
  }

  proses_posting() {
    let payload = {};
    payload = {
      ...payload,
      ...this.master,
      ...this.selectedAnggota,
      ...this.form.value,
      KBT: this.KBT,
      KU: 10
    };
    this.service.postingSimpananPokok(payload)
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
      }, () => {
        this.baru();
        this.refreshEvent.emit('');
      });

  }
  onCancle(item){
    this.modal_anggota = item;
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
        BERITA: 'SETORAN REK. SIMP POKOK A/N' + this.selectedAnggota.NAMA,
        KETERANGAN: 'SETORAN REK. SIMP POKOK A/N' + this.selectedAnggota.NAMA,
      };
      this.form.patchValue(payload);
    }
  }

  getForm() {
    return this.form;
  }

  fromModal(event) {
    const obj = {};
    obj[event.input] = event.payload.CIB;
    this.form.patchValue(obj);
  }
}
