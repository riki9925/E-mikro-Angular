import {ExcelService} from './excel.service';
import {MessageService} from '@core/services/utils/message.service';
import {LoadingService} from '@core/services/utils/loading.service';


export const utilsService: any[] = [
  ExcelService,
  MessageService,
  LoadingService
];

export * from './excel.service';
export * from '@core/services/utils/message.service';
export * from  '@core/services/utils/loading.service';
