import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { store} from './redux/store';
import { Phonebook } from 'components';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Provider store={store}>
      <Phonebook />
    </Provider>
  // </React.StrictMode>
);
