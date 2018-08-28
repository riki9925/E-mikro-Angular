import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BukuBesar, Jenis, Kelompok} from '@app/models/index';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-bukubesar-form',
  templateUrl: 'bukubesar-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class BukubesarFormComponent implements OnInit {
  @Input() loading: boolean;
  @Input('selectedJenis') selectedJenis: Jenis;
  @Input('selectedKelompok') selectedKelompok: Kelompok;
  @Input('jenis') jenis: Jenis[];
  @Input('kelompok') kelompok: Kelompok[];
  @Input('bukubesar') bukubesar: BukuBesar;
  @Output('jenisChange') onJenisChange = new EventEmitter<any>();
  @Output('kelompokChange') onKelompokChange = new EventEmitter<any>();
  @Output('batal') batalEvent = new EventEmitter<any>();
  @Output('save') saveEvent = new EventEmitter<any>();
  @Output('update') updateEvent = new EventEmitter<any>();
  bukubesarForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.bukubesarForm = this.fb.group({
      JENIS: [this.jenisGet()],
      KELOMPOK: [this.bukubesar.ACCKEL || '0'],
      ACCKEL: [this.bukubesar.ACCKEL || '0', [Validators.required]],
      ACCBB: [this.bukubesar.ACCBB || '', [Validators.required]],
      BUKUBESAR: [this.bukubesar.BUKUBESAR || '', [Validators.required]],
      KATEGORI: [this.bukubesar.KATEGORI || '', [Validators.required]],
      GOLONGAN: [this.bukubesar.GOLONGAN || '', [Validators.required]],
      RESIKO: [this.bukubesar.RESIKO || '', [Validators.required]],
      URUT: [this.urut(), [Validators.required]],
    });
  }

  batal() {
    this.batalEvent.emit('');
  }

  jenisGet() {
    this.jenis.forEach(r => {
      if (r.ACCJENIS == this.bukubesar.ACCKEL) {
        return r.ACCJENIS;
      }
    });
    return '0';
  }

  urut() {
    if (this.bukubesar.ACCBB === undefined) {
      return '';
    } else {
      return this.bukubesar.ACCBB.substr(2);
    }

  }

  simpan() {
    const form = this.bukubesarForm.value;
    console.log(form);
    const payload = {
      ...this.bukubesar,
      RESIKO: form.RESIKO,
      GOLONGAN: form.GOLONGAN,
      BUKUBESAR: form.BUKUBESAR,
      ACCKEL: form.KELOMPOK,
      ACCBB: form.KELOMPOK + form.URUT,
      KATEGORI: form.KATEGORI
    };
    this.saveEvent.emit(payload);
  }

  update() {
    const form = this.bukubesarForm.value;
    const payload = {
      ...this.bukubesar,
      RESIKO: form.RESIKO,
      GOLONGAN: form.GOLONGAN,
      BUKUBESAR: form.BUKUBESAR,
      ACCKEL: form.KELOMPOK,
      ACCBB: form.KELOMPOK + form.URUT,
      KATEGORI: form.KATEGORI
    };
    console.log(payload);
    this.updateEvent.emit(payload);
  }

  onChangeJenis() {
    this.jenis.forEach(r => {
      if (r.ACCJENIS == this.bukubesarForm.value.JENIS) {
        this.onJenisChange.emit(r);
      }
    });
    this.bukubesarForm.patchValue({
      KELOMPOK: '0'
    });
  }

  onChangeKelompok() {

  }
}
