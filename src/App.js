import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import SearchLog from './components/SearchLog/SearchLog';
const App = () =>  {
  return (
    <div className='app-wrapper'>
      <Header />
      <SearchLog />
      <NavBar />
      <Profile />
    </div>
  );
}

export default App;
