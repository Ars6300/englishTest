// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { commonEnvironment } from './environment.common';

export const environment = {
  ...commonEnvironment,
  production: false,
  api_URL: 'https://localhost:44356',
  locales: ['en', 'ru'],
  defaultLocale: 'en',
  SPEAKING_TIME: '05:00',
  AUDIO_FORMAT: '.mp3',
  CHARACTERS_LIMIT: 512,
  TIMER: 3600,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
