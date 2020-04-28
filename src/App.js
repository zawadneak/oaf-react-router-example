import React from 'react';

import { Router } from 'react-router-dom';
// react-router-dom v5

import { wrapHistory } from 'oaf-react-router';
import history from './services/history';
// History basic config at services folder
import Routes from './routes';

const historySettings = {
  // announcementsDivId: "announcements",
  // primaryFocusTarget: "main h1, [role=main] h1",
  // documentTitle: (location: Location) => document.title,
  // shouldHandleAction: (previousLocation, nextLocation, action) => true,
  // disableAutoScrollRestoration: true,

  announcePageNavigation: true,

  // setPageTitle: false,
  // handleHashFragment: true,
  // restorePageStateOnPop: true

  navigationMessage: () => `Navigated!`,
  // Silent navigation prompt

  // smoothScroll: true,
  // restorePageStateOnPop: true,
};
// For advanced usage - not required!

wrapHistory(history, historySettings);

export default function App() {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
}
