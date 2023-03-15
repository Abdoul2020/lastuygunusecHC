import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//router form here
import { HashRouter as Router } from "react-router-dom";

//redux toolkit connect
import { store } from "./services/redux/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
     <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);


