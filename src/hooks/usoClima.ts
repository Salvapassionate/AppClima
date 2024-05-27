import { useState, useEffect } from 'react';
import { getWeatherByCity, getForecastByCity } from '../api/clima';
import { WeatherData, ForecastData } from '../tipos';

export const useWeather = (city: string) => {
  // Estados para almacenar los datos del clima, el pronóstico, el estado de carga y errores
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!city) return;

    const fetchWeather = async () => {
      setLoading(true);
      try {
        const weatherData = await getWeatherByCity(city);
        const forecastData = await getForecastByCity(city);
        setWeather(weatherData);
        setForecast(forecastData);
        setError(null);
      } catch (error) {
        setError('Error al obtener la data');
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  return { weather, forecast, loading, error };
};
