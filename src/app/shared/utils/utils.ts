import { environment } from 'src/environments/environment';
import {
  MissingTranslationHandler,
  MissingTranslationHandlerParams,
} from '@ngx-translate/core';

export class MissingTranslationService implements MissingTranslationHandler {
  handle(params: MissingTranslationHandlerParams) {
    return `WARN: '${params.key}' is missing in '${params.translateService.currentLang}' locale`;
  }
}

export function getUrlName() {
  return window.location.pathname.split('/')[1];
}

export function getTimeLeft(date: string) {
  let deadlineTime: any = new Date(
    Date.parse(date) + environment.TIMER_MINUTES * 60000
  );
  let nowTime: any = new Date();
  return Math.round((deadlineTime - nowTime) / 1000);
}
