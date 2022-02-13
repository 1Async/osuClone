import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Beatmaps from './Pages/Beatmaps';
import Ranking from './Pages/Ranking';
import Community from './Pages/Community';
import Store from './Pages/Store';
import Help from './Pages/Help';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/home' exact element={<Home />} />
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