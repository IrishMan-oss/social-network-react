import React from 'react' ; 
import './App.css';
import Header from  './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Setting from './components/SettingApp/Setting';

import {BrowserRouter, Route} from 'react-router-dom';

const App = (props) => {


  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
      
        <div className="app-wrapper-content">
          <Route path='/dialog' render={ () => <Dialogs dialogs={props.state} messages={props.state}/>} />
          <Route path='/profile' render={ () => <Profile post={props.state} addPost={props.addPost}/> } />
          <Route path='/News' render={() => <News/>}/>
          <Route path='/Setting' render={() => <Setting/>}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
