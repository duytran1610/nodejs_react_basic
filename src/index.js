import React from 'react';
import ReactDOM from 'react-dom/client';
import './resourses/styles/global.scss';
import App from './resourses/views/App';
import reportWebVitals from './reportWebVitals';
// using redux
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import rootReducer from './store/reducers/rootReducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
const reduxStore = createStore(
    rootReducer,
    // enable Redux Devtools
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

root.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
