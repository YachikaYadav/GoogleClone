import './App.css';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';

import {
  BrowserRouter as Router,Route, Routes
} from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="App">
    <Routes>
          <Route exact path="/search" element={<SearchPage />}></Route>
          <Route exact path="/" element={<Home />}></Route>
    </Routes>
      </div>
    </Router>
  );
}

export default App;
