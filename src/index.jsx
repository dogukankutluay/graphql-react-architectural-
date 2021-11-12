import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloProvider } from 'react-apollo';
import { apolloClient } from './providers/graphql';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import configureStore from './providers/redux';
import './assets/style/variables.module.scss';

export const history = createBrowserHistory();

export const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={apolloClient}>
      <Router history={history}>
        <App />
      </Router>
    </ApolloProvider>
  </Provider>,
  document.getElementById('root')
);
