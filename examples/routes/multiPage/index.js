import MultiFormHoc from '../../../src/formMultiHandler';
import currentStep from '../../../src/currentStep';
import addSteps from '../../../src/addSteps';
import FormHandler from '../../../src/formHandler';

import { compose } from 'recompose';
import { connect } from 'react-redux';
import { saveValues } from '../../redux';

import Container from './Container';
import First from './First';
import Second from './Second';
import Third from './Third';

const steps = [
  {
    component: FormHandler(First),
    name: 'first',
  },
  {
    component: FormHandler(Second),
    name: 'second',
  },
  {
    component: FormHandler(Third),
    name: 'third',
  },
];

const childRoutes = steps.map(({ component, name }) => ({ component, path: name }));

const multi = compose(
  connect(null, dispatch => ({ api: values => dispatch(saveValues(values)) })),
  addSteps(steps),
  currentStep('multi-page'),
  MultiFormHoc
);
export default {
  path: 'multi-page',
  component: multi(Container),
  indexRoute: childRoutes.slice(0, 1),
  childRoutes: childRoutes.slice(1),
};
