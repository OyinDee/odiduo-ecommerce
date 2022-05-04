import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
// import React from 'react';
import { StrictMode } from 'react'; 
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import './index.css'
// import App from './App';
import counter from './reducers/counter'
import forusername from './reducers/forusername'
import {createStore} from 'redux'
import { Provider } from 'react-redux'
const store = createStore(forusername, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const rootElement = document.getElementById("root")
const root = createRoot(rootElement)

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

root.render (
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </BrowserRouter>
  </StrictMode>
)
serviceWorkerRegistration.register();

reportWebVitals();


