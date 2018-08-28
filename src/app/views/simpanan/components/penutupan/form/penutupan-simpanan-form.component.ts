import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {BaseComponent} from '@app/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Account, Anggota, Instansi, JenisSimpanan, MasterSimpanan} from '@app/models';

@Component({
  selector: 'app-penutupan-simpanan-form',
  templateUrl: './penutupan-simpanan-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PenutupanSimpananFormComponent extends BaseComponent implements OnInit {
  @ViewChild('cariAnggotaModal') modal;
  anggota: Anggota;
  master: MasterSimpanan[];
  @Input() account: any;
  @Input() jeniss: any;
  @Input() masters: MasterSimpanan[];
  @Input('anggota') anggotas: any;
  acc: Account[];
  form: FormGroup;
  items: FormArray;
  show = false;
  selectedMaster : MasterSimpanan;
  @Output('refresh') refreshEvent = new EventEmitter<any>();
  private KBT: string;

  constructor(private fb: FormBuilder) {
    super();
    this.form = this.fb.group({
      CIB: [null, [Validators.required]],
      ACC: [null, [Validators.required]],
      NOSIMP: [null, [Validators.required]],
      NOMINAL: [null, [Validators.required]],
      KETERANGAN: [null, [Validators.required]],
      BERITA: [null, [Validators.required]]
    });

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
        BERITA: 'PENUTUPAN REK. SIMP A/N' + this.anggota.NAMA,
        KETERANGAN: 'PENUTUPAN REK. SIMP A/N' + this.anggota.NAMA
      };
      this.form.patchValue(payload);
    }
  }
  ngOnInit() {
    this.form.get('CIB').valueChanges.subscribe(r => {
      if (r !== null) {
        this.master = undefined;
        this.anggota = this.anggotas[r];
        this.master = this.masters.filter(f => {
          return this.anggota.CIB === f.CIB;
        });
      }
    });
    this.form.get('NOSIMP').valueChanges.subscribe(r => {
      if (r !== null) {
        this.selectedMaster = this.masters.filter(f => {
          return f.NOSIMP === r;
        })[0];
        const payload = {
          NOMINAL: this.selectedMaster.SALDO - this.selectedMaster.BLOKIR
        };
        this.form.patchValue(payload);
      }
    });
  }
  onCancle(item) {
    this.show = item;
  }

  cariAnggota(item) {
    this.show = true;
    this.modal.show(item);
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
  proses(){
    console.log(this.form.value);
  }
}
