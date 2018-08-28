import {anggotaMasterComponent} from './master';
import {AnggotaDashboardComponent} from '@app/views/anggota/components/anggota-dashboard/anggota-dashboard.component';

export const components: any[] = [,
  ...anggotaMasterComponent,
  AnggotaDashboardComponent
];

export * from '@app/views/anggota/components/anggota-dashboard/anggota-dashboard.component';
export * from './master';
