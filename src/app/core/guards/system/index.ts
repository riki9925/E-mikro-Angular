import {MasterIsLoadedGuard} from './master-is-loaded.guard';
import {IsAuthenticatedGuard} from './is-authenticated.guard';

export const systemGuards: any[] = [
  MasterIsLoadedGuard,
  IsAuthenticatedGuard
];
export * from './master-is-loaded.guard';
export * from './is-authenticated.guard';
