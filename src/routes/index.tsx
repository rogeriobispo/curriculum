import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Qualifications from '../pages/qualification';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Qualifications} />
  </Switch>
);

export default Routes;
