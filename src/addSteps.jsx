import React from 'react';

export default function addStepsHOC(steps) {
  return function originalComponent(Component) {
    return function addSteps(props) {
      return React.cloneElement(<Component />, Object.assign({}, props, { steps }));
    };
  };
}
