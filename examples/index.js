import ReactDOM from 'react-dom';
import React from 'react';
import { Router, browserHistory } from 'react-router';
import { AppContainer as HMRContainer } from 'react-hot-loader';
import routes from './routes';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux';

const store = createStore(
  rootReducer,
  /* eslint-disable no-underscore-dangle */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  /* eslint-enable */
);

const dest = document.getElementById('app');
function renderApp() {
  ReactDOM.render(
    <HMRContainer>
      <Provider {...{ store }}>
        <Router
          history={browserHistory}
          {...{ routes }}
        />
      </Provider>
    </HMRContainer>,
    dest
  );
}

if (module.hot) {
  /**
   * Ignore warning from React Router, caused by react-hot-loader.
   * We can safely filter from the console.
   * See https://github.com/gaearon/react-hot-loader/issues/298
   */
  const originalError = console.error; // eslint-disable-line no-console
  console.error = message => { // eslint-disable-line no-console
    if (message && message.indexOf('You cannot change <Router routes>;') === -1) {
      originalError.apply(console, [message]);
    }
  };

  module.hot.accept('./routes', () => {
    renderApp();
  });
}

renderApp();
