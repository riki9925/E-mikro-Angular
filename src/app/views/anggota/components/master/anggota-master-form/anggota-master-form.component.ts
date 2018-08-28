import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BaseComponent} from '@app/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Agama, Anggota, Golongan, HubunganKeluarga, Identitas, Instansi, Jabatan, Pekerjaan, Pendidikan} from '@app/models';
@Component({
  selector: 'app-anggota-master-form',
  templateUrl: 'anggota-master-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnggotaMasterFormComponent extends BaseComponent implements OnInit {
  @Input() anggota: Anggota;
  @Input() loading: boolean;
  @Input() instansi: Instansi[];
  @Input() hub_keluarga: HubunganKeluarga[];
  @Input() agama: Agama[];
  @Input() pendidikan: Pendidikan[];
  @Input() pekerjaan: Pekerjaan[];
  @Input() jabatan: Jabatan[];
  @Input() identitas: Identitas[];
  @Input() golongan: Golongan[];
  @Output('save') saveEvent = new EventEmitter<any>();
  @Output('update') updateEvent = new EventEmitter<any>();
  @Output('batal') batalEvent = new EventEmitter<any>();
  anggotaForm: FormGroup;

  constructor(private fb: FormBuilder) {
    super();
  }

  ngOnInit() {
    this.anggotaForm = this.fb.group({
      CIB: ['', [Validators.required]],
      NOKARTU: ['', [Validators.required]],
      NOGAJI: ['', [Validators.required]],
      NIP: ['', [Validators.required]],
      NAMA: ['', [Validators.required]],
      KI: ['', [Validators.required]],
      PANGGILAN: ['', [Validators.required]],
      KL: ['', [Validators.required]],
      TMP_LAHIR: ['', [Validators.required]],
      TGL_LAHIR: ['', [Validators.required]],
      ID: ['', [Validators.required]],
      NO_ID: ['', [Validators.required]],
      TGLEXPIRED: ['', [Validators.required]],
      AGAMA: ['', [Validators.required]],
      PENDIDIKAN: ['', [Validators.required]],
      PEKERJAAN: ['', [Validators.required]],
      JABATAN: ['', [Validators.required]],
      GOLONGAN: ['', [Validators.required]],
      ALAMAT: ['', [Validators.required]],
      TELEPON: ['', [Validators.required]],
      HANDPHONE: ['', [Validators.required]],
      E_MAIL: ['', [Validators.required]],
      NAMAAHLIWARIS: ['', [Validators.required]],
      HUBKEL: ['', [Validators.required]],
      ALAMATAHLIWARIS: ['', [Validators.required]]
    });
    this.anggotaForm.patchValue(this.anggota);
  }

  getForm() {
    return this.anggotaForm;
  }

  simpan() {
    const {valid, value} = this.anggotaForm;
    if (valid) {
      this.anggota = {
        ...this.anggota,
        ...value
      };
      this.saveEvent.emit(this.anggota);
    }

  }

  update() {
    const {valid, value, touched} = this.anggotaForm;
    if (valid && touched) {
      this.anggota = {
        ...this.anggota,
        ...value
      };
      this.updateEvent.emit(this.anggota);
    }
  }

  batal() {
    this.batalEvent.emit('');
  }
}
