import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Details } from './pages/Details';
import { Loader } from './components/Loader/Loader';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="city" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
