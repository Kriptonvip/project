import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/Nav/Nav';
import News from './components/News/News';
import Music from './components/Music/Music';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import SearchLog from './components/SearchLog/SearchLog';
import { BrowserRouter, Route } from 'react-router-dom';
import Settings from './components/Settings/Settings';

const App = (props) => {
  return (    
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <NavBar />
        <SearchLog />
        <div className='app-wrapper-content'>
          <Route path='/profile' render={() => <Profile 
            state={props.state.profilePage}/>} />
          <Route path='/dialogs' 
          render={() => <Dialogs 
          state={props.state.messagesPage}/> }/>
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/Settings' render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;