import React, {Suspense, StrictMode, lazy} from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import reducers from './reducers';
import Spinner from './containers/Spinner';
import DefaultLayout from './layouts/DefaultLayout';
import './App.scss';

const store = createStore(reducers);
const SpinnerController = lazy(() => import('./containers/SpinnerController'));

const App: React.FC = () => {
  return (
    <StrictMode>
      <Provider store={store}>
        <Router>
          <Suspense fallback={Spinner}>
            <Switch>
              <Route exact path={'/'}>
                <DefaultLayout>
                  <SpinnerController/>
                </DefaultLayout>
              </Route>
            </Switch>
          </Suspense>
        </Router>
      </Provider>
    </StrictMode>
  );
};

export default App;
