import {environment, mgen_login} from "../core/remote.js";

if (environment === 'prod') {
  window.LogRocket && window.LogRocket.init('rgvzmt/aiharmony');
  if (mgen_login) {
    LogRocket.identify(mgen_login);
  }
  LogRocket.getSessionURL(sessionURL => {
    Sentry.configureScope(scope => {
      scope.setExtra("sessionURL", sessionURL);
      console.log('Logrocket integrated with sentry');
    });
  });
  console.log('Logrocket initialized');
}
