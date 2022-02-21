import { useState } from 'react';
import { useGetWeatherByCityNameQuery } from '../../services/weatherApi';
import { useDispatch } from 'react-redux';
import { Loader } from '../Loader/Loader';
import { Card } from '../Card/Card';
import { addCity } from '../../redux/cities/cities-reducer';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import styles from './SearchForm.module.css';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export function SearchForm() {
  const [cityName, setCityName] = useState('');

  const { data, error, isFetching, isError } = useGetWeatherByCityNameQuery(
    cityName,
    {
      skip: cityName === '',
    },
  );

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    setCityName(e.currentTarget.elements.cityName.value);
    e.currentTarget.reset();
  };

  const onAddToList = () => {
    dispatch(addCity(data));
  };

  const showNotFoundError = isError && error.status === 404;
  const showCityData = data && !isFetching && !isError;

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          name="cityName"
          autoComplete="off"
          autoFocus
          placeholder="Search city"
        />
        <button type="submit" className={styles.button}>
          <SearchOutlinedIcon />
        </button>
      </form>

      {isFetching && <Loader />}

      {showNotFoundError && <p>Oops! {cityName} is not found!</p>}

      {showCityData && (
        <Card
          data={data}
          buttonIcon={<AddCircleOutlineIcon />}
          onClick={onAddToList}
        ></Card>
      )}
    </>
  );
}
