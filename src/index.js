import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";

import reducers from "./reducers";
import App from "./components/App";

const store = createStore(
  reducers, // Primer parametro: todos los reducers
  {}, // Segundo parametro: estado inicial
  applyMiddleware(reduxThunk) // Middleware para manejar async actions
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
