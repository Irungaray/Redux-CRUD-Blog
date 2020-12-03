import React from "react";
import ReactDOM from "react-dom";

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';
import App from "./components/App";

const store = createStore(
  reducers, // Primer parametro: todos los reducers
  { } // Segundo parametro: estado inicial
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
