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

const App = () => {
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
