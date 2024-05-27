//manejar solicitudes a ala api
import axios from 'axios';

const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  params: {
    appid: API_KEY,
    units: 'metric',
  },
});

// Interceptor para manejo de solicitudes
axiosInstance.interceptors.request.use(
  (config) => {
    console.log(`Sending request to ${config.url}`);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor para manejo de respuestas
axiosInstance.interceptors.response.use(
  (response) => {
    console.log('Received response:', response);
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Implementación  de caché
const cache = new Map<string, any>();

const getCachedOrFetch = async (url: string, params: any) => {
  const key = `${url}_${JSON.stringify(params)}`;
  if (cache.has(key)) {
    return cache.get(key);
  }
  const response = await axiosInstance.get(url, { params });
  cache.set(key, response.data);
  return response.data;
};

//Funcion para obtener el clima actual por ciudad
export const getWeatherByCity = async (city: string) => {
  return getCachedOrFetch('weather', { q: city });
};

//Funcion para obtener el pronostico del tiempo por ciudad
export const getForecastByCity = async (city: string) => {
  return getCachedOrFetch('forecast', { q: city });
};