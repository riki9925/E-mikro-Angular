import {Routes} from '@angular/router';
import {AccountComponent, BukubesarComponent, InstansiComponent, ShuComponent, UnitBisnisComponent} from './components';
import {PengaturanLayoutComponent} from '@app/views/setting/containers';
import {PengaturanDashboardComponent, UsersComponent} from '@app/views/setting/components';

export const routes: Routes = [
  {
    path: '',
    component: PengaturanDashboardComponent,
    data: {
      title: 'Dashboard Pengaturan'
    }
  },
  {
    path: '',
    component: PengaturanLayoutComponent,
    data : {
      title: 'Pengaturan'
    },
    children : [
      {
        path: 'account',
        component: AccountComponent,
        data: {
          title: 'Account'
        }
      },
      {
        path: 'instansi',
        component: InstansiComponent,
        data: {
          title: 'Instansi'
        }
      },
      {
        path: 'bukubesar',
        component: BukubesarComponent,
        data: {
          title: 'Bukubesar'
        }
      },
      {
        path: 'shu',
        component: ShuComponent,
        data: {
          title: 'Bukubesar'
        }
      },
      {
        path: 'unit',
        component: UnitBisnisComponent,
        data: {
          title: 'Bukubesar'
        }
      },
      {
        path: 'users',
        component: UsersComponent,
        data: {
          title: 'Bukubesar'
        }
      }
    ]
  },

];
