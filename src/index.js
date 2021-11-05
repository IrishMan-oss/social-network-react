import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';




let rerender = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App 
        state={store._state} 
        dispatch={store.dispatch.bind(store)}
        />
    </React.StrictMode>,
    document.getElementById('root')
  )}
rerender(store.getState());
store.subsc(rerender)