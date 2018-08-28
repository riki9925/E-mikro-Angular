import {Anggota, Instansi, JenisSimpanan, MasterSimpanan} from '@app/models';
import {Component, Input, OnInit} from '@angular/core';
import {ExcelService} from '@app/core';


@Component({
  selector: 'app-simpanan-master-list',
  templateUrl: 'simpanan-master-list.component.html'
})

export class SimpananMasterListComponent implements OnInit {
  @Input() loading: boolean;
  @Input('master') source: MasterSimpanan[];
  master: MasterSimpanan[] = this.source;
  @Input() instansi: Instansi[];
  @Input() jenis: JenisSimpanan[];
  selectedInstansi: any = 'SEMUA';
  selectedJenis: any = 'SEMUA';
  status: any = 'SEMUA';

  constructor(private excelService: ExcelService) {
  }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.master = this.source.filter(x => {
      if (this.selectedJenis === 'SEMUA') {
        return true;
      }
      return x.ACC === this.selectedJenis.ACC;
    }).filter(x => {
      if (this.status === 'SEMUA') {
        return true;
      }
      return x.ST == this.status;
    });
  }

  exportPdf() {

  }

  exportCsv() {
    this.excelService.exportAsCsvFile(this.master, 'master-simpanan');
  }

  exportExcel() {
    this.excelService.exportAsExcelFile(this.master, 'master-simpanan');
  }
}
