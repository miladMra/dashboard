import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { DarkMOdeContextProvider } from "./context/darkModeContext";

ReactDOM.render(
  <React.StrictMode>
    <DarkMOdeContextProvider>
      <App />
    </DarkMOdeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

