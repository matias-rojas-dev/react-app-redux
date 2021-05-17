import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import { NotFound } from '../components/NotFound';

const Predefined = lazy(() => import('../components/Predefined'));
const Searched = lazy(() => import('../container/Searched'));
const Favorites = lazy(() => import('../container/Favorites'));
const Login = lazy(() => import('../components/Login'));

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Route exact path='/' component={Login} />
          <Route exact path='/main/favorites' component={Favorites} />
          <Route exact path='/main/search' component={Searched} />
          <Route path='/main/predefined' component={Predefined} />
        </Suspense>
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
)

export default App;