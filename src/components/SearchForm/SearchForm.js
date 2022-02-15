import { connect } from 'react-redux';
import { useState } from 'react';
import { APIservice } from '../../services/weatherAPI';
import citiesActions from '../../redux/cities/cities-actions';
import { Button } from '@mui/material';
import { MapDispatchToProps } from 'react-redux';

export function SearchForm() {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = e => {
    setSearchValue(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    APIservice.getWeather(searchValue).then(result => {});
  };

  // const handleSearchChange = e => {
  //   setSearchValue(e.currentTarget.value);
  // };
  return (
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
  );
}
const mapDispatchToProps = dispatch => ({
  addCity: data => dispatch(citiesActions.addCityCard(data)),
});

export default connect(null, mapDispatchToProps)(SearchForm);
