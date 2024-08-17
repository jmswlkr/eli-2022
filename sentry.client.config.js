// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

const DSN = process.env.NEXT_PUBLIC_SENTRY_DSN;

Sentry.init({
  dsn: DSN,

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: true,
 
  // Session Replay
  integrations: [
    Sentry.replayIntegration({
      maskAllText: true,
      blockAllMedia: true
    })
  ],

  replaysOnErrorSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,

  // tracesSampleRate: 1.0,
  // tracePropagationTargets: [
  //   'localhost',
  //   /^https:\/\/embodiedlearninginstitute\.com\/api/
  // ],
  profilesSampleRate: 1.0,

})