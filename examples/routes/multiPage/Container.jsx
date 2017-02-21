import React, { PropTypes } from 'react';
import { Link } from 'react-router';

export default function Container({ steps, base, children }) {
  return (
    <main>
      <h3>Multi</h3>
      <ul>
        {steps.map(step => (
          <li key={step.name}><Link to={`/${base}/${step.path}`}>{step.name}</Link></li>
        ))}
      </ul>
      {children}
    </main>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  steps: PropTypes.array.isRequired,
  base: PropTypes.string.isRequired,
};

Container.defaultProps = {
  children: false,
  steps: [],
  base: '',
};
