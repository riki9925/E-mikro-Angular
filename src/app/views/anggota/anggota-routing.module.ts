import { AnggotaLayoutComponent } from './container';
import {Routes} from '@angular/router';
import {AnggotaMasterComponent } from './components';
import {AnggotaDashboardComponent} from '@app/views/anggota/components';

export const routes: Routes = [
  {
    path: '',
    component: AnggotaDashboardComponent,
    data: {
      title: 'Master Anggota'
    }
  },
  {
    path: '',
    component: AnggotaLayoutComponent,
    data: {
      title: 'Modul Anggota'
    },
    children: [
      {
        path: 'master',
        component: AnggotaMasterComponent,
        data: {
          title: 'Master Anggota'
        }
      }
    ]
  }
];
