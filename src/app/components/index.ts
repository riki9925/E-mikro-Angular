import {LoginFormComponent} from './login/login-form.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UspDashboardComponent} from './usp-dashboard/usp-dashboard.component';

export * from './login/login-form.component';
export * from './usp-dashboard/usp-dashboard.component';
export * from './dashboard/dashboard.component';

export const components: any[] = [
  LoginFormComponent,
  DashboardComponent,
  UspDashboardComponent,
];
