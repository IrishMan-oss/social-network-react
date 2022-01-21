import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Setting from "./components/SettingApp/Setting";
import {Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
  return (

      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/dialog" render={() => (<DialogsContainer/>)}/>
          <Route path="/profile" render={() => <Profile/>}/>
          <Route path="/News" render={() => <News />} />
          <Route path="/Setting" render={() => <Setting />} />
        </div>
      </div>
   
  );
};

export default App;
