import App from './App';
import Home from './Home';
import SinglePage from './SinglePage';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import { saveValues } from '../redux';
import FormHandler from '../../src/formHandler';

import multiPage from './multiPage';

const withReduxHOC = compose(
  connect(null, dispatch => ({ api: values => dispatch(saveValues(values)) })),
  FormHandler
);
const childRoutes = [
  {
    path: 'single-page',
    component: FormHandler(SinglePage),
  },
  {
    path: 'with-redux',
    component: withReduxHOC(SinglePage),
  },
  multiPage,
];

export default {
  childRoutes: [{
    childRoutes,
    path: '/',
    component: App,
    indexRoute: {
      component: Home,
    },
  }],
};
