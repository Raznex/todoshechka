import React from 'react';
import ReactDOM from 'react-dom/client';

import './common/assets/normalize/_reset.scss';
import './common/assets/fonts/_fonts.scss';
import App from './components/App/App';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
