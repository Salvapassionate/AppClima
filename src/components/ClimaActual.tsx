import React from 'react';
import { WeatherData } from '../tipos';
import { Card, CardContent, Typography, Grid } from '@mui/material';

interface CurrentWeatherProps {
  weather: WeatherData;
}

// Componente para mostrar la información del clima actual
const ClimaActual: React.FC<CurrentWeatherProps> = ({ weather }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{weather.name}</Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="h6">{weather.weather[0].description}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">Temperatura: {weather.main.temp}°C</Typography>
            <Typography variant="body1">Humedad: {weather.main.humidity}%</Typography>
            <Typography variant="body1">Viento: {weather.wind.speed} m/s</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ClimaActual;