import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {BaseComponent} from '@app/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {JenisSimpanan} from '@app/models';

@Component({
  selector: 'app-simpanan-setting-form',
  templateUrl: './simpanan-setting-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpananSettingFormComponent extends BaseComponent implements OnInit {
  @Input() jenis: JenisSimpanan;
  @Input() account: any;
  @Input() loading: boolean;
  @Output('batal') batalEvent = new EventEmitter<any>();
  @Output('simpan') simpanEvent = new EventEmitter<any>();
  @Output('update') updateEvent = new EventEmitter<any>();
  simpananSetting: FormGroup;
  show = false;
  input;
  constructor(private fb: FormBuilder) {
    super();
    this.simpananSetting = this.fb.group({
      ACC: ['', [Validators.required]],
      ACCKETERANGAN: ['', []],
      BGA: ['', []],
      PJK: ['', []],
      SETAWAL: ['', []],
      SETMIN: ['', []],
      MINTARIK: ['', []],
      MAXTARIK: ['', []],
      SALMIN: ['', []],
      POT: ['', []],
      SETORAN: ['', []],
      ADM: ['', []],
      ACCBGA: ['', []],
      ACCBGAKETERANGAN: ['', []],
      ACCPJK: ['', []],
      ACCPJKKETERANGAN: ['', []],
      ACCADM: ['', []],
      ACCADMKETERANGAN: ['', []],
      ACCPOT: ['', []],
      ACCPOTKETERANGAN: ['', []],
      PB: ['0', [Validators.required]],
      KST: ['0', [Validators.required]],
      CIF: [null]
    });


  }

  change($event) {
    console.log($event);
  }

  getForm() {
    return this.simpananSetting;
  }

  ngOnInit() {
    this.simpananSetting.get('ACC').valueChanges.subscribe(r => {
      if (r !== '') {
        const pay = {
          ACCKETERANGAN: this.account[r].KETERANGAN || '',
        };
        this.simpananSetting.patchValue(pay);
      }
    });
    this.simpananSetting.get('ACCBGA').valueChanges.subscribe(r => {
      if (r !== '') {
        const pay = {
          ACCBGAKETERANGAN: this.account[r].KETERANGAN || ''
        };
        this.simpananSetting.patchValue(pay);
      }

    });
    this.simpananSetting.get('ACCPJK').valueChanges.subscribe(r => {
      if (r !== '') {
        const pay = {
          ACCPJKKETERANGAN: this.account[r].KETERANGAN || '',
        };
        this.simpananSetting.patchValue(pay);
      }
    });
    this.simpananSetting.get('ACCADM').valueChanges.subscribe(r => {
      if (r !== '') {
        const pay = {
          ACCADMKETERANGAN: this.account[r].KETERANGAN || '',
        };
        this.simpananSetting.patchValue(pay);
      }
    });
    this.simpananSetting.get('ACCPOT').valueChanges.subscribe(r => {
      if (r !== '') {
        const pay = {
          ACCPOTKETERANGAN: this.account[r].KETERANGAN || '',
        };
        this.simpananSetting.patchValue(pay);
      }
    });
    this.simpananSetting.patchValue(this.jenis);
  }

  fromModal(item) {
    this.show = false;

    const {input, payload} = item;
    const pay = {};
    pay[input] = payload.ACC;
    this.simpananSetting.patchValue(pay);
  }

  cariAccount(item) {
    this.input = item;
    this.show = true;
  }

  modal_close(item) {
    this.show = item;
  }

  simpan() {
    const payload = {
      ...this.simpananSetting.value,
      KU: 10
    };
    this.simpanEvent.emit(payload);
  }

  update() {
    const payload = {
      ...this.simpananSetting.value,
      KU: 10
    };
   this.updateEvent.emit(payload);
  }

  batal() {
    this.batalEvent.emit('');
  }
}
