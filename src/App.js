import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { CityDetails } from './pages/CityDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/:cityId" element={<CityDetails />} />
      </Routes>
    </div>
  );
}

export default App;
