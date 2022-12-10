import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css'
import App from "./App";
import { Provider } from "react-redux";    //redux
import { AppProvider } from "./context/Context";     //use context
import Stored from "./redux/Store";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Provider store={Stored}>
      <AppProvider>
      <App/>
      </AppProvider>
    
    </Provider>
  </div>
);


