import { APIservice } from '../../services/weatherAPI';
import { useState } from 'react';
import styles from './Card.module.css';

export function Card({ data, onDelete }) {
  const [cityData, setCityData] = useState(data);

  // const refreshData = () => {
  //     const cityId = cityData.id
  //     APIservice.refreshWeather(cityId).then(result=>{
  //         // console.log(result);
  //         setCityData(result.data);
  //         console.log('ok')})
  // }

  const temp = Math.round(cityData.main.temp) + String.fromCharCode(0xb0);
  return (
    <div className={styles.container}>
      <h3>{cityData.name}</h3>
      <p>{temp}</p>
      <p>{cityData.weather[0].main}</p>
      <img
        alt="weather icon"
        src={`http://openweathermap.org/img/wn/${cityData.weather[0].icon}@2x.png`}
      ></img>
      <button type="button">Refresh weather</button>
      <button>More info</button>
      <button type="button" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
}
