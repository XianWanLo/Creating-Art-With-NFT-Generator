import './App.css';
import Minter from './Minter'
import Displayer from './Displayer'
import {Route, BrowserRouter as Router, Routes} from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Minter />} />
          <Route path="display" element={<Displayer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


