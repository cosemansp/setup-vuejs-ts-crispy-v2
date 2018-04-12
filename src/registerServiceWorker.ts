import log from 'loglevel';
import { register } from 'register-service-worker';

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready() {
      log.info(
        'App is being served from cache by a service worker.\n' +
          'For more details, visit https://goo.gl/AFskqB',
      );
    },
    cached() {
      log.info('Content has been cached for offline use.');
    },
    updated() {
      log.info('New content is available; please refresh.');
    },
    offline() {
      log.info('No internet connection found. App is running in offline mode.');
    },
    error(error) {
      log.error('Error during service worker registration:', error);
    },
  });
}
