import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ContextProvider } from "./contexts/Context";

const rootElement = document.getElementById('root');

ReactDOM.render(
<ContextProvider>
<BrowserRouter>
    <App />
</BrowserRouter>
</ContextProvider>,
  rootElement);



