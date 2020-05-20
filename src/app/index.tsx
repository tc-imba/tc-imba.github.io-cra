/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, HashRouter } from 'react-router-dom';

import { GlobalStyle } from '../styles/global-styles';

import { HomePage } from './containers/HomePage/Loadable';
import { ProfilePage } from './containers/ProfilePage/Loadable';
import { CodeActivityPage } from './containers/CodeActivityPage/Loadable';
import { NotFoundPage } from './containers/NotFoundPage/Loadable';

const url = s => process.env.PUBLIC_URL + s;

export function App() {
  return (
    <HashRouter>
      <Helmet titleTemplate="%s - tc-imba" defaultTitle="tc-imba">
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>

      <Switch>
        <Route exact path={url('/')} component={HomePage} />
        <Route exact path={url('/profile')} component={ProfilePage} />
        <Route exact path={url('/profile/code')} component={CodeActivityPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </HashRouter>
  );
}
