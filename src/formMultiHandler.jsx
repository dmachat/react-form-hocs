import React, { Component, PropTypes } from 'react';

export default function componentWithSteps(OriginalComponent) {
  return class FormHandlerWrapper extends Component {
    static propTypes = {
      currentStep: PropTypes.string.isRequired,
      steps: PropTypes.array.isRequired,
    }

    static defaultProps = {
      currentStep: '',
      steps: [],
    }

    render() {
      const { steps, currentStep } = this.props;

      if (!currentStep.length || !steps.length) {
        return false;
      }

      const stepsWithActive = steps.map((step, idx) => Object.assign({}, step, {
        activeStep: step.name === currentStep,
        path: idx !== 0 ? step.name : '',
      }));
      return React.cloneElement(
        <OriginalComponent />,
        Object.assign({}, this.props, { steps: stepsWithActive })
      );
    }
  };
}
