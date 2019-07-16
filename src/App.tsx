import React, {Suspense, lazy} from 'react';
import thunk from 'redux-thunk';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {HashRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import reducers from 'reducers';
import Spinner from 'containers/Spinner';
import DefaultLayout from 'layouts/DefaultLayout';
import './App.scss';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

const Home = lazy(() => import('containers/Home'));
const LearningDashboard = lazy(() => import('containers/LearningDashboard'));

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={<Spinner/>}>
          <Switch>
            <Route exact path={'/'}>
              <DefaultLayout>
                <Home/>
              </DefaultLayout>
            </Route>
            <Route exact path={'/learn'}>
              <DefaultLayout>
                <LearningDashboard/>
              </DefaultLayout>
            </Route>
            <Route path={'*'}>
              <Redirect to={'/'}/>
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </Provider>
  );
};

export default App;
