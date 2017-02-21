import React, { PropTypes } from 'react';
import { Link } from 'react-router';

export default function App({ children }) {
  return (
    <div>
      <header><Link to='/'>Home</Link></header>
      {children}
    </div>
  );
}
App.propTypes = {
  children: PropTypes.node,
};
