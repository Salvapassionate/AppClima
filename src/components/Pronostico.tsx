import React from 'react';
import { ForecastData } from '../tipos';
import { Card, CardContent, Typography, Grid } from '@mui/material';

interface ForecastProps {
  forecast: ForecastData;
}

// Componente para mostrar el pronóstico del clima a 5 días
const Pronostico: React.FC<ForecastProps> = ({ forecast }) => {
  // Filtro para obtener una predicción por día  por pronóstico de las 12:00 PM
  const dailyForecast = forecast.list.filter(item => item.dt_txt.includes('12:00:00'));
  return (
    <Grid container spacing={2}>
      {dailyForecast.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card>
            <CardContent>
              <Typography variant="body1">{item.dt_txt.split(' ')[0]}</Typography>
              <Typography variant="body2">{item.weather[0].description}</Typography>
              <Typography variant="body2">Temperatura: {item.main.temp}°C</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Pronostico;