import {Routes} from '@angular/router';
import {
  SimpananMasterComponent,
  SimpananSetoranComponent,
  SimpananSetoranPeranggotaComponent,
  SimpananSettingComponent,
  SimpananDashboardComponent
} from '@app/views/simpanan/components';
import {SimpananLayoutComponent} from '@app/views/simpanan/container';
import {SimpananMasterApprovalComponent} from '@app/views/simpanan/components/approval';
import {PendebetanBiayaAdminComponent} from '@app/views/simpanan/components/pendebetan_biaya_admin';
import {PendebetanBungaJasaComponent} from '@app/views/simpanan/components/pendebetan_bunga_jasa';
import {PindahBukuSimpananComponent} from '@app/views/simpanan/components/pindah_buku';
import {PenarikanSimpananComponent} from '@app/views/simpanan/components/penarikan';
import {PendebetanSimpananComponent} from '@app/views/simpanan/components/pendebetan';
import {PengkreditanSimpananComponent} from '@app/views/simpanan/components/pengkreditan';
import {PenutupanSimpananComponent} from '@app/views/simpanan/components/penutupan';

export const routes: Routes = [
  {
    path: '',
    component: SimpananDashboardComponent,
    data: {
      title: 'Master Simpanan'
    }
  },
   {
    path: '',
    component: SimpananLayoutComponent,
    data: {
      title: 'Simpanan'
    },
    children: [
      {
        path: 'setting',
        component: SimpananSettingComponent,
        data: {
          title: 'Setting Simpanan'
        }
      },
      {
        path: 'master',
        component: SimpananMasterComponent,
        data: {
          title: 'Master Simpanan'
        }
      },
      {
        path: 'approval',
        component: SimpananMasterApprovalComponent,
        data: {
          title: 'Approval Master Simpanan'
        }
      },
      {
        path: 'pendebetan_biaya_admin',
        component: PendebetanBiayaAdminComponent,
        data: {
          title: 'Pendebetan Biaya Admin'
        }
      },
      {
        path: 'pendebetan_bunga_jasa',
        component: PendebetanBungaJasaComponent,
        data: {
          title: 'Pendebetan Bunda / Jasa'
        }
      },
      {
        path: 'setoran_pokok',
        component: SimpananSetoranComponent,
        data: {
          title: 'Setoran Simpanan Pokok'
        }
      },
      {
        path: 'setoran_per_anggota',
        component: SimpananSetoranPeranggotaComponent,
        data: {
          title: 'Setoran Simpanan Per Anggota'
        }
      },
      {
        path: 'pindah_buku',
        component: PindahBukuSimpananComponent,
        data: {
          title: 'Pindah Buku'
        }
      },
      {
        path: 'penarikan',
        component: PenarikanSimpananComponent,
        data: {
          title: 'Penarikan Simpanan'
        }
      },

      {
        path: 'penutupan',
        component: PenutupanSimpananComponent,
        data: {
          title: 'Penutupan Simpanan'
        }
      },
      {
        path: 'pendebetan',
        component: PendebetanSimpananComponent,
        data: {
          title: 'Pendebetan Simpanan'
        }
      },
      {
        path: 'pengkreditan',
        component: PengkreditanSimpananComponent,
        data: {
          title: 'Pengkreditan Simpanan'
        }
      },
      {
        path: 'setoran_kolektif',
        component: SimpananSetoranPeranggotaComponent,
        data: {
          title: 'Setoran Simpanan Kolektif'
        }
      }
    ]
  },

  ];
