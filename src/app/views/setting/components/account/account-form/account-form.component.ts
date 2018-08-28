import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Account, BukuBesar} from '@app/models';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BaseComponent} from '@app/core';

@Component({
  selector: 'app-account-form',
  templateUrl: 'account-form.component.html'
})

export class AccountFormComponent extends BaseComponent implements OnInit {
  @Input() loading: boolean;
  @Input() account: Account;
  @Input() accounts: Account[];
  @Input() bukubesar: BukuBesar[];
  @Input() selectedBukubesar: BukuBesar;
  @Output('simpan') simpanEvent = new EventEmitter<Account>();
  @Output('update') updateEvent = new EventEmitter<Account>();
  @Output('batal') batalEvent = new EventEmitter<any>();
  accountForm: FormGroup;

  constructor(private fb: FormBuilder) {
    super();
  }

  getForm(): FormGroup {
    return this.accountForm;
  }

  ngOnInit() {
    this.accountForm = this.fb.group({
      bukubesar: ['', [Validators.required]],
      vbukubesar: ['', [Validators.required, Validators.minLength(4)]],
      urut: ['', [Validators.required, Validators.minLength(4)]],
      KETERANGAN: ['', [Validators.required, Validators.minLength(4)]],
    });
    console.log(this.account);
    if (this.account.CIF) {
      const payload = {
        bukubesar: this.bukubesar.filter(x => x.ACCBB === this.account.ACCBB)[0],
        vbukubesar: this.account.ACCBB,
        urut: this.account.ACC.substring(4),
        KETERANGAN: this.account.KETERANGAN
      };
      this.accountForm.patchValue(payload);
    }
  }

  urut(item) {
    const acc = this.accounts.filter(x => x.ACC.startsWith(item));
    let se = 1;
    acc.forEach(x => {
      let val = parseInt(x.ACC.substring(4));
      if (val > se) {
        se = val;
      }
    });
    return this.pad(se + 1, 2);
  }

  onChangeBukubesar() {
    this.accountForm.setValue({
      ...this.accountForm.value,
      vbukubesar: this.accountForm.value.bukubesar.ACCBB,
      urut: this.urut(this.accountForm.value.bukubesar.ACCBB)
    });
  }

  simpan() {
    const form = this.accountForm.value;
    const data: Account = {
      ...this.account,
      ACC: this.account.ACCBB + form.urut,
      KETERANGAN: form.KETERANGAN,
      GOLONGAN: this.account.GOLONGAN || 'USER',
      KU: '10'
    };
    this.simpanEvent.emit(data);
  }
  update() {
    const form = this.accountForm.value;
    const data: Account = {
      ...this.account,
      ACC: this.account.ACCBB + form.urut,
      KETERANGAN: form.KETERANGAN,
      GOLONGAN: this.account.GOLONGAN || 'USER',
      KU: '10'
    };
    this.updateEvent.emit(data);
  }

  batal() {
    this.batalEvent.emit('');
  }
  pad(num, size) {
    const s = '000000000' + num;
    return s.substr(s.length - size);
  }
}
