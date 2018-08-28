import {AuthInterceptor} from './auth-intreceptor';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

export const intreceptor: any[] = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }
];
