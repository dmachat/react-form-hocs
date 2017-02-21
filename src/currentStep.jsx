import React from 'react';

export default function getCurrentStep(base) {
  return function withCurrentStep(Component) {
    return function includeCurrentStep(props) {
      const { location: { pathname }, steps } = props;
      const match = new RegExp(`${base}\/([^\/]+)\/?$`);
      const pathMatch = pathname.match(match);
      const currentStep = pathMatch ? pathMatch[1] : steps[0].name;
      return React.cloneElement(<Component />, Object.assign({}, props, { base, currentStep }));
    };
  };
}
