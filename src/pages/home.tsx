import React, { useState } from 'react';
import { Container, Typography, CircularProgress } from '@mui/material';
import Buscar from '../components/Buscar';
import ClimaActual from '../components/ClimaActual';
import Pronostico from '../components/Pronostico';
import { useWeather } from '../hooks/usoClima';

// Componente principal de la aplicación
const Home: React.FC = () => {
  const [city, setCity] = useState<string>('London');
  const { weather, forecast, loading, error } = useWeather(city);

  // Maneja el evento de búsqueda y actualiza la ciudad
  const handleSearch = (searchCity: string) => {
    setCity(searchCity);
  };

  return (
    <Container style={{ marginTop: '20px' }}>
      <Typography variant="h3" gutterBottom>
        Clima Actual Web
      </Typography>
      <Buscar onSearch={handleSearch} />
      {loading && <CircularProgress />}
      {error && <Typography color="error">{error}</Typography>}
      {weather && <ClimaActual weather={weather} />}
      {forecast && <Pronostico forecast={forecast} />}
    </Container>
  );
};

export default Home;