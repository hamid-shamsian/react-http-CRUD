import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

function init() {
   Sentry.init({
      dsn: "https://5e716f4cc82c434eb58a26947018581d@o1348924.ingest.sentry.io/6628344",
      integrations: [new BrowserTracing()],

      // Set tracesSampleRate to 1.0 to capture 100%
      // of transactions for performance monitoring.
      // We recommend adjusting this value in production
      tracesSampleRate: 1.0
   });
}

function log(error) {
   Sentry.captureException(error);
}

export default {
   init,
   log
};
