import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
 import {Provider} from "react-redux"
import { store } from './Redux/store';
import './bootstrap.min.css'
import { ContextProvider } from './Context/contextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Provider store={store}>
    <ContextProvider>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </ContextProvider>
    </Provider>
  </React.StrictMode>
);

