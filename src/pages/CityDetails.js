import { useParams, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { useGetWeatherByCityIdQuery } from '../services/weatherApi';
import { Loader } from '../components/Loader/Loader';
import AirIcon from '@mui/icons-material/Air';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import Brightness6OutlinedIcon from '@mui/icons-material/Brightness6Outlined';
import Brightness4OutlinedIcon from '@mui/icons-material/Brightness4Outlined';

export function CityDetails() {
  const { cityId } = useParams();
  const location = useLocation();

  const { data, isFetching, refetch } = useGetWeatherByCityIdQuery(cityId);

  return (
    <div className="container">
      <Link to={location?.state?.from?.location ?? '/'} className="back_link">
        <ArrowBackOutlinedIcon />
      </Link>
      <div className="city_container">
        {isFetching && <Loader />}
        {data && !isFetching && (
          <div>
            <h3>{data.name}</h3>
            <p className="text">
              {Math.round(data.main.temp) + String.fromCharCode(0xb0)}
            </p>
            <p className="text">
              feels like:
              {Math.round(data.main.feels_like) + String.fromCharCode(0xb0)}
            </p>
            <img
              alt="weather icon"
              src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            ></img>
            <p className="text">{data.weather[0].main}</p>
            <p className="text">
              <AirIcon /> {data.wind.speed} m/s
            </p>
            <p className="text">
              <Brightness6OutlinedIcon />
              <Moment unix>{data.sys.sunrise}</Moment>
            </p>
            <p className="text">
              <Brightness4OutlinedIcon />
              <Moment unix>{data.sys.sunset}</Moment>
            </p>
            <button
              id={data.id}
              type="button"
              onClick={refetch}
              className="button"
            >
              Refresh weather
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
