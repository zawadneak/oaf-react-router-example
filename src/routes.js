import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Secondary from './pages/Secondary';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/secondary" exact component={Secondary} />
    </Switch>
  );
}
