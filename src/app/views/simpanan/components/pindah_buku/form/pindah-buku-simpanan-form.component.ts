import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {BaseComponent} from '@app/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Account, Anggota, Instansi, JenisSimpanan, MasterSimpanan} from '@app/models';

@Component({
  selector: 'app-pindah-buku-simpanan-form',
  templateUrl: './pindah-buku-simpanan-form.component.html',
  changeDetection:ChangeDetectionStrategy.OnPush

})
export class PindahBukusimpananFormComponent extends BaseComponent implements OnInit {
  @ViewChild('cariAnggotaModal') modal;
  anggota1 : Anggota;
  anggota2 : Anggota;
  master1: MasterSimpanan[];
  master2: MasterSimpanan[];
  @Input() account: any;
  @Input() jeniss: any;
  @Input() masters: MasterSimpanan[];
  @Input() anggota: any;
  @Input() instansi: any;
  acc: Account[];
  form: FormGroup;
  total = 0;
  items: FormArray;
  show: boolean = false;
  selectedMaster1;
  selectedMaster2;
  @Output('refresh') refreshEvent = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    super();
    this.form = this.fb.group({
      CIB1: [null, [Validators.required]],
      ACC1: [null, [Validators.required]],
      KI1: [null, [Validators.required]],
      NAMA_INSTANSI1: [null, [Validators.required]],
      NAMA1: [null, [Validators.required]],
      ID1: [null, [Validators.required]],
      NO_ID1: [null, [Validators.required]],
      TGLEXPIRED1: [null, [Validators.required]],
      ALAMAT1: [null, [Validators.required]],
      CIB2: [null, [Validators.required]],
      ACC2: [null, [Validators.required]],
      KI2: [null, [Validators.required]],
      NAMA_INSTANSI2: [null, [Validators.required]],
      NAMA2: [null, [Validators.required]],
      ID2: [null, [Validators.required]],
      NO_ID2: [null, [Validators.required]],
      TGLEXPIRED2: [null, [Validators.required]],
      ALAMAT2: [null, [Validators.required]],
      NOSIMP1: [null, [Validators.required]],
      NOSIMP2: [null, [Validators.required]],
      NOMINAL: [null, [Validators.required]],
      KETERANGAN: [null, [Validators.required]],
      BERITA: [null, [Validators.required]]
    });

  }

  ngOnInit() {
    this.form.get('CIB1').valueChanges.subscribe(r => {
      if (r !== null) {
        this.master1 = undefined;
        this.anggota1 = this.anggota[r];
        this.master1 = this.masters.filter(f => {
          return this.anggota1.CIB === f.CIB;
        });
      }
    });
    this.form.get('CIB2').valueChanges.subscribe(r => {
      if (r !== null) {
        this.master2 = undefined;
        this.anggota2 = this.anggota[r];
        this.master2 = this.masters.filter(f => {
          return this.anggota2.CIB === f.CIB;
        });
      }
    });
    this.form.get('NOSIMP1').valueChanges.subscribe(r => {
      if (r !== null) {
        this.selectedMaster1 = this.masters.filter(f => {
          return f.NOSIMP === r;
        })[0];
      }
    });
    this.form.get('NOSIMP2').valueChanges.subscribe(r => {
      if (r !== null) {
        this.selectedMaster2 = this.masters.filter(f => {
          return f.NOSIMP === r;
        })[0];
      }
    });
  }
  onCancle(item){
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

}
