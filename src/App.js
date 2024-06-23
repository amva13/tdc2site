import logo from './logo.svg';
// import './App.css';
import HomePage from './HomePage';
import StartPage from './start';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <div className="App">
        <HomePage />
      </div>
      
      <Routes>
        <Route exact path="/" component={HomePage} />
        <Route path="/overview" component={HomePage} />
        <Route path="/start" component={StartPage} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
