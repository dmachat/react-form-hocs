import React from 'react';
import { Link } from 'react-router';

export default function Home() {
  return (
    <div>
      <h3>Examples</h3>
      <ul>
        <li>
          Single Page
          <ul>
            <li><Link to='/single-page'>Local state validations</Link></li>
            <li><Link to='/with-redux'>Save with redux action</Link></li>
          </ul>
        </li>
        <li>
          Multi Page
          <ul>
            <li><Link to='/multi-page'>Local state validations</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
