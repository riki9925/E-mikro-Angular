import {AppBreadcrumpComponent} from './breadcrumb/app-breadcrumb.component';
import {HeaderComponent} from './header/header.component';
import {AccountModalComponent} from './account-modal/account-modal.component';
import {AnggotaModalComponent} from './anggota-modal/anggota-modal.component';
import {InformasiAnggotaComponent, ListAnggotaComponent} from '@shared/components/anggota';
import {InformasiSimpananComponent} from '@shared/components/simpanan';
import {AppAlertComponent} from '@shared/components/app-alert/app-alert.component';
import {AppLoadingComponent} from '@shared/components/app-loading/app-loading.component';


export const components: any[] = [
  AppBreadcrumpComponent,
  HeaderComponent,
  AccountModalComponent,
  AnggotaModalComponent,
  InformasiAnggotaComponent,
  InformasiSimpananComponent,
  ListAnggotaComponent,
  AppAlertComponent,
  AppLoadingComponent
];
