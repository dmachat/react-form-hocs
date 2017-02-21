import React, { Component, PropTypes } from 'react';

function validate(validations, values) {
  return Object.keys(validations).reduce((acc, field) => {
    const { validator, required, error } = validations[field];
    const formValue = values[field];
    if (required && !formValue) {
      return Object.assign({}, acc, {
        [field]: error || `${field} is required`,
      });
    } else if (validator && formValue && !validator(formValue)) {
      return Object.assign({}, acc, {
        [field]: error || `${field} is invalid`,
      });
    }
    return acc;
  }, {});
}

export default function FormHandler(OriginalComponent) {
  return class FormHandlerWrapper extends Component {
    static propTypes = {
      api: PropTypes.func,
    }

    static defaultProps = {
      api(values) {
        console.log('Connect your data interface to save these values', values); // eslint-disable-line
      },
    }

    constructor() {
      super();
      this.state = {
        errors: {},
        values: {},
      };
      this.setValue = this.setValue.bind(this);
      this.saveValues = this.saveValues.bind(this);
    }

    setValue(key) {
      return value => {
        // keep all fields in the child form in local state and update at once
        this.setState(nextState => Object.assign({}, nextState, {
          values: Object.assign({}, nextState.values, {
            [key]: value,
          }),
        }));
      };
    }

    saveValues() {
      const { api } = this.props;
      const { values } = this.state;
      const isValid = this.validateInputs();

      this.setState(nextState => Object.assign({}, nextState, {
        errors: isValid,
      }));

      if (Object.keys(isValid).length) {
        return false;
      }

      // hit an omnibus endpoint with all required form values
      return api(values);
    }

    validateInputs() {
      const { fieldDefs } = OriginalComponent;
      return validate(fieldDefs, this.state.values);
    }

    render() {
      const { values, errors } = this.state;
      return (
        <OriginalComponent
          {...{
            values,
            errors,
            setValue: this.setValue,
            saveValues: this.saveValues,
          }}
        />
      );
    }
  };
}
