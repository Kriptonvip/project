import './App.css';
import React, { Component } from 'react'; 
import Header from './components1/Header/Header';
import NavBar from './components1/Nav/Nav';
import News from './components1/News/News';
import Music from './components1/Music/Music';
import Profile from './components1/Profile/Profile';
import Dialogs from './components1/Dialogs/Dialogs';
import SearchLog from './components1/SearchLog/SearchLog';
import { BrowserRouter, Route } from 'react-router-dom';
import Settings from './components1/Settings/Settings';

const App = (props) => {
  
  return (    
      <div className='app-wrapper'>
        <Header />
        <NavBar state={props.state.NavBar} />
        <SearchLog />
        <div className='app-wrapper-content'>
          <Route path='/profile' render={() => <Profile 
          state={props.state.profilePage} addNewSymbol={props.addNewSymbol} addPost={props.addPost}/>} />
          <Route path='/dialogs' 
          render={() => <Dialogs state={props.state.messagesPage} addPost={props.addPost}/> }/>
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/Settings' render={() => <Settings />} />
        </div>
      </div>
  );
}

export default App;
