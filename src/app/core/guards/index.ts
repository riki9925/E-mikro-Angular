import * as fromSetting from './setting';
import * as fromSystem from './system';

export const guards: any[] = [
  ...fromSetting.settingGuard,
  ...fromSystem.systemGuards
];
export * from './setting';
export * from './system';
