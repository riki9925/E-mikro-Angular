import {Instansi, JenisSimpanan, MasterSimpanan} from '@app/models';
import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ExcelService} from '@app/core';
import * as fromService from '@app/core';


@Component({
  selector: 'app-pendebetan-bunga-jasa-list',
  templateUrl: 'pendebetan-bunga-jasa-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PendebetanBungaJasaListComponent implements OnInit {
  @Input('master') source: MasterSimpanan[];
  master: MasterSimpanan[] = this.source;
  @Input() jenis: JenisSimpanan[];
  selectedJenis: any = '';
  @Output('refresh') refreshEvent = new EventEmitter<any>();

  constructor(private excelService: ExcelService,
              private cf: ChangeDetectorRef,
              private msgService: fromService.MessageService,
              private service: fromService.MasterSimpananService)
  {
  }

  ngOnInit() {
    this.jenis = this.jenis.filter(x => {
      return x.BGA > 0;
    });
    this.refresh();
  }
  nominal(item: MasterSimpanan) {
    return (((this.selectedJenis.BGA / 100) * item.SALDO) / 12).toFixed(2);
  }
  refresh() {
    this.master = this.source.filter(x => {
      if(this.selectedJenis == null){
        return false;
      }
      return x.ACC === this.selectedJenis.ACC;
    });
  }
  proses(){
    const payload = {
      ...this.selectedJenis,
      KU: '10',
      KBT: 'BJU'
    };
    this.service.postingPendebetanBiayaAdmin(payload)
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

  private baru() {
    this.master = null;
    this.selectedJenis = null;
    this.cf.detectChanges();
  }
}
