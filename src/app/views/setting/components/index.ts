import * as fromAccount from './account';
import * as fromBukubesar from './bukubesar';
import * as fromShu from './shu';
import * as fromUnitBisnis from './unit-bisnis';
import * as fromInstansi from './instansi';
import {PengaturanDashboardComponent} from '@app/views/setting/components/dashboard/pengaturan-dashboard.component';
import { UsersComponent, UsersListComponent } from './users';
export const components: any[] = [
  UsersComponent,
  UsersListComponent,
  PengaturanDashboardComponent,
  ...fromAccount.accountComponent,
  ...fromBukubesar.bukubesarComponent,
  ...fromShu.shuComponent,
  ...fromUnitBisnis.unitBisniComponent,
  ...fromInstansi.instansiComponent
];


export * from './users';
export * from '@app/views/setting/components/dashboard/pengaturan-dashboard.component';
export * from './account';
export * from './bukubesar';
export * from './shu';
export * from './unit-bisnis';
export * from './instansi';
