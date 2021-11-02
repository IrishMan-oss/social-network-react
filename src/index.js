import state, {subsc} from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewPostText, addMessage,updateNewMessageText} from './redux/state'



let rerender = () => {

ReactDOM.render(
  <React.StrictMode>
    <App state={state} addPost={addPost} addMessage={addMessage} updateNewPostText={updateNewPostText} updateNewMessageText={updateNewMessageText}/>
  </React.StrictMode>,
  document.getElementById('root')
)}
rerender(state);
subsc(rerender)