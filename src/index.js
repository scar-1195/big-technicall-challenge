import React from 'react';
import ReactDOM from 'react-dom/client';
import { ReactTestApp } from './ReactTestApp';

//* Redux Imports
import { Provider } from 'react-redux';
import { store } from './store/store';

//* UI Imports
import "primereact/resources/themes/mdc-light-indigo/theme.css";
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
        

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactTestApp />
    </Provider>
  </React.StrictMode>,
);
