import './App.css';
import { useEffect } from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Beatmaps from './Pages/Beatmaps';
import Ranking from './Pages/Ranking';
import Community from './Pages/Community';
import Store from './Pages/Store';
import Help from './Pages/Help';
import NavbarVertical from './Components/NavbarVertical';
import $ from 'jquery';

function App() {

  const toggel = () => {
    $(".showNav").click(function () {
      $(".myimg").toggleClass("changed");
      $(".navbarVertical").toggleClass("active");
    });
  }

  useEffect(() => {
    toggel();
  }, []);


  return (
    <div className="App">
      <Router>
        <Navbar />
        <NavbarVertical />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/beatmaps' exact element={<Beatmaps />} />
          <Route path='/ranking' exact element={<Ranking />} />
          <Route path='/community' exact element={<Community />} />
          <Route path='/store' exact element={<Store />} />
          <Route path='/help' exact element={<Help />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
