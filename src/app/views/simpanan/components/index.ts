import * as fromSetting from './setting';
import * as fromSetoran from './setoran_simpanan_pokok';
import * as fromSetoranPerAnggota from './setoran_simpanan_peranggota';
import * as fromSimpananMaster from './master';
import {SimpananDashboardComponent} from '@app/views/simpanan/components/dashboard/simpanan-dashboard.component';
import {approval} from '@app/views/simpanan/components/approval';
import {pendebetan_biaya_admin} from '@app/views/simpanan/components/pendebetan_biaya_admin';
import {pendebetan_bunga_jasa} from '@app/views/simpanan/components/pendebetan_bunga_jasa';
import {pindahBukuSimpananComponent} from '@app/views/simpanan/components/pindah_buku';
import {penarikan} from '@app/views/simpanan/components/penarikan';
import {pendebetan} from '@app/views/simpanan/components/pendebetan';
import {pengkeditan} from '@app/views/simpanan/components/pengkreditan';
import {penutupan} from '@app/views/simpanan/components/penutupan';

export const components: any[] = [
  ...pendebetan_biaya_admin,
  ...pendebetan_bunga_jasa,
  ...approval,
  ...pindahBukuSimpananComponent,
  ...penarikan,
  ...pengkeditan,
  ...pendebetan,
  ...penutupan,
  SimpananDashboardComponent,
  ...fromSetting.simpananSettingComponent,
  ...fromSetoran.simpananSetoranComponent,
  ...fromSetoranPerAnggota.simpananSetoranPerAnggotaComponent,
  ...fromSimpananMaster.simpananMasterComponent,
];
export * from './setting';
export * from './setoran_simpanan_pokok';
export * from './setoran_simpanan_peranggota';
export * from './master';
export * from '@app/views/simpanan/components/dashboard/simpanan-dashboard.component';
