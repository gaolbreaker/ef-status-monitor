import React from 'react';
import ReactDOM from 'react-dom'; // only the JS file that calls ReactDOM.render() needs to import ReactDOM, the other component files do not
import './styles/reset.css';
import './styles/skeleton.css';

// Components
import App from './components/App';

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
