import { useState } from 'react';
import { SearchForm } from '../components/SearchForm/SearchForm';
import { APIservice } from '../services/weatherAPI';
import { Loader } from '../components/Loader/Loader';
import { Card } from '../components/Card/Card';

export function Home() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchChange = e => {
    setSearchValue(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    APIservice.getWeather(searchValue).then(result => {
      setSearchResult(result);
      setSearchValue('');
      setIsLoading(true);
    });
  };
  const refreshData = id => {
    // const cityId = cityData.id
    APIservice.refreshWeather(id).then(result => {
      // console.log(result);

      console.log('ok');
    });
  };
  return (
    <>
      <h1>Weather</h1>
      <h2>Welcome to our application!</h2>
      <p>
        Here You can find info about the weather in over 200 000 cities. You can
        add the city to Your list and always be aware of the weather at your
        favourite places. Try now!{' '}
      </p>
      {/* <SearchForm value = {searchValue} onChange = {handleSearchChange} onSubmit = {handleSubmit}></SearchForm> */}
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          value={searchValue}
          onChange={handleSearchChange}
          autoComplete="off"
          autoFocus
          placeholder="Search city"
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>
      {searchResult && <Card data={searchResult}></Card>}
    </>
  );
}
