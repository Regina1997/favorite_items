import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createGlobalStyle } from 'styled-components'
import { Provider } from 'react-redux';
import store from './components/Store'

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: auto;
  outline: none;
  font-style: normal;
}`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Global/>
    <Provider store={store}>
        <App />
    </Provider>
  </>
);

reportWebVitals();


