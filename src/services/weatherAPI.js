import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = '2775e482dafc44474a5e3d9834188ba9';
export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.openweathermap.org/data/2.5',
  }),
  endpoints: builder => ({
    getWeatherByCityName: builder.query({
      query: cityName => `/weather?q=${cityName}&units=metric&appid=${API_KEY}`,
    }),
    getWeatherByCityId: builder.query({
      query: id => `/weather?id=${id}&units=metric&appid=${API_KEY}`,
    }),
    getWeatherByCoordinates: builder.query({
      query: (lat, lon) =>
        `/onecall?lat=${lat}&lon=${lon}&exclude=hourly&units=metric&appid=${API_KEY}`,
    }),
  }),
});

export const {
  useGetWeatherByCityNameQuery,
  useGetWeatherByCityIdQuery,
  useGetWeatherByCoordinatesQuery,
} = weatherApi;
