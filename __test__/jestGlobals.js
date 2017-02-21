const dotenv = require('dotenv');
const _ = require('lodash/fp');
const react = require('react');

dotenv.config({ silent: true });

console.log('Setting up jest globals');

global._ = _;
global.React = react;
