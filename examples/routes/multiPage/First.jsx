import React, { PropTypes } from 'react';

import InputElement from '../../components/inputElement';

const fieldDefs = {
  email: {
    required: true,
  },
  username: {
    required: true,
  },
};
export default function First({ values, errors, setValue, saveValues }) {
  const { email, username } = values;
  const handleSubmit = evt => {
    saveValues();
    evt.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>First</h4>
      <InputElement
        type='text'
        onChange={setValue('email')}
        placeholder='email address'
        value={email}
        error={errors.email}
      />
      <InputElement
        type='text'
        onChange={setValue('username')}
        placeholder='your username'
        value={username}
        error={errors.username}
      />
      <input
        type='submit'
        value='Submit'
      />
    </form>
  );
}
First.propTypes = {
  values: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  setValue: PropTypes.func.isRequired,
  saveValues: PropTypes.func,
};
// custom validator functions may be added to each field definition
First.fieldDefs = fieldDefs;
