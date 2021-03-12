import React from 'react';
import ReactDOM from 'react-dom';
import Routing from "./Components/Routing";
import store from "../src/Redux/Store/index";
import {Provider} from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routing />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
