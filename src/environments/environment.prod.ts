import { commonEnvironment } from './environment.common';

export const environment = {
  ...commonEnvironment,
  production: true,
  api_URL: 'https://localhost:44356',
  locales: ['en', 'ru'],
  defaultLocale: 'en',
  SPEAKING_TIME: '05:00',
  AUDIO_FORMAT: '.mp3',
  CHARACTERS_LIMIT: 512,
  TIMER: 3600,
};
