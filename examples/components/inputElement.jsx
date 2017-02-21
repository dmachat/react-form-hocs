import React, { PropTypes } from 'react';

export default function InputElement({ type, onChange, placeholder, value = '', error }) {
  const handleChange = evt => {
    onChange(evt.target.value);
  };
  const style = error ? { border: '1px solid red' } : {};

  return (
    <div>
      <input
        {...{ type, placeholder, value, onChange: handleChange, style }}
      />
      {error &&
        <span>{error}</span>
      }
    </div>
  );
}
InputElement.propTypes = {
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  error: PropTypes.string,
};
