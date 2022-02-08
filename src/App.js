
import './App.css';
import getWeatherData from './services/weatherAPI';
import {useState} from 'react';

function App() {
  const [searchValue, setSearchValue] = useState('');
 

  const handleSubmit = e => {
    e.preventDefault();
    getWeatherData(searchValue).then(result => {
      console.log(result);
    });
  };

  const handleSearchChange = e => {
    setSearchValue(e.currentTarget.value.toLowerCase());
  };

  return (
    <div className="App">
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          value={searchValue}
          autoComplete="off"
          autoFocus
          placeholder="Search city"
          onChange={handleSearchChange}
        />
        <button type="submit" className="button">
          <span className="">Search</span>
        </button>
      </form>
    </div>
  );
}

export default App;
