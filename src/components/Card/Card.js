import { useGetWeatherByCityNameQuery } from '../../services/weatherApi';
import { useLocation, Link } from 'react-router-dom';
import styles from './Card.module.css';
import { Loader } from '../Loader/Loader';

export function Card({ data, buttonIcon, onClick }) {
  const location = useLocation();

  const { refetch, isFetching } = useGetWeatherByCityNameQuery(data.name);

  const temp = Math.round(data.main.temp) + String.fromCharCode(0xb0);
  // return (
  //   <div className={styles.container}>
  //     <h3>{data.name}</h3>
  //     <p>{temp}</p>

  //     <img
  //       alt="weather icon"
  //       src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
  //     >
  //     </img>
  //     <p>{data.weather[0].main}</p>
  //     <button id = {data.id} type="button" onClick={refetch} className={styles.button}>Refresh weather</button>
  //     <button type="button" id = {data.id} onClick={onClick} className={styles.icon_button}>
  //      {buttonIcon}
  //     </button>
  //   </div>

  return (
    // <div className={styles.container}>
    <>
      {isFetching && <Loader />}
      {!isFetching && (
        <>
          <Link
            className={styles.link}
            to={{
              pathname: `/${data.id}`,
              state: {
                from: {
                  location,
                  label: 'Back to main',
                },
              },
            }}
          >
            <h3>{data.name}</h3>
            <p>{temp}</p>

            <img
              className={styles.icon}
              alt="weather icon"
              src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            ></img>
            <p>{data.weather[0].main}</p>
          </Link>
          <div className={styles.button_container}>
            <button
              id={data.id}
              type="button"
              onClick={refetch}
              className={styles.button}
            >
              Refresh weather
            </button>
            <button
              type="button"
              id={data.id}
              onClick={onClick}
              className={styles.icon_button}
            >
              {buttonIcon}
            </button>
          </div>
        </>
      )}
    </>
    //  </div>
  );
}
