import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Feed from './pages/Feed';
import Loginpage from './pages/LoginPage';
import OnBoarding from './pages/OnBoarding';
import Itinenary from './pages/Itinenary';
import Recommendations from './pages/Recommendations';
import Safety from './pages/Safety';
import ViewProfile from './pages/ViewProfile';
import React, { useState } from "react";
// import { useCookies } from 'react-cookie';
import Posts from './pages/Posts'

const App = () => {
  // const [cookies, setCookie, removeCookie] = useCookies(['user']);

  React.useEffect(()=>{

  },[])


  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/Feed" element={<Feed/>}/>
    <Route path="/Recommendations" element={<Recommendations/>}/>
    <Route path="/LoginPage" element={<Loginpage/>}/>
    <Route path="/Itinenary" element={<Itinenary/>}/>
    <Route path="/OnBoarding" element={<OnBoarding/>}/>
    <Route path="/Safety" element={<Safety/>}/>
    <Route path="/ViewProfile" element={<ViewProfile/>}/>
    <Route path="/Posts" element={<Posts/>}/>
    </Routes>
    </BrowserRouter>
  );
}

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h1>Yo guys what's up</h1>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
export default App;
