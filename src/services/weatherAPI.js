import axios from 'axios';

const API_KEY = '2775e482dafc44474a5e3d9834188ba9';
const BASE_URL = 'http://api.openweathermap.org/';
// const BASE_URL_togetweather = 'api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}'

export async function getCoordinatesByCityName(city) {
  try {
    const url = `${BASE_URL}geo/1.0/direct?q=${city}&limit=5&appid=${API_KEY}`;
    const result = await axios.get(url);
    console.log(result.data);
    return result.data;
  } catch (err) {
    console.log(err);
  }
}

async function getWeather(city) {
  try {
    const url = `${BASE_URL}data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    const result = await axios.get(url);
    // console.log(result.data)
    return result.data;
  } catch (err) {
    console.log(err);
  }
}
async function refreshWeather(id) {
  try {
    const url = `${BASE_URL}data/2.5/weather?id=${id}&units=metric&appid=${API_KEY}`;
    const result = await axios.get(url);
    // console.log(result)
    return result;
  } catch (err) {
    console.log(err);
  }
}

async function getDetails(lat, lon) {
  const url = `${BASE_URL}data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={minutely}&units=metric&appid=${API_KEY}`;
  try {
    const result = axios.get(url);
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
}

export const APIservice = {
  getWeather,
  refreshWeather,
  getDetails,
};
