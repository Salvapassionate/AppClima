/*import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};
*/
/*import React, { useState } from 'react';
import { Container } from '@mui/material';
import SearchBar from './components/Buscar';
import CurrentWeather from './components/ClimaActual';
import Forecast from './components/Pronostico';
import { useWeather } from './hooks/usoClima';

const App: React.FC = () => {
  const [city, setCity] = useState<string>('London');
  const { weather, forecast, loading, error } = useWeather(city);

  const handleSearch = (searchCity: string) => {
    setCity(searchCity);
  };

  return (
    <Container>
      <SearchBar onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {weather && <CurrentWeather weather={weather} />}
      {forecast && <Forecast forecast={forecast} />}
    </Container>
  );
};

export default App;
*/

/*import React, { useState } from 'react';
import { Container, Typography, CircularProgress } from '@mui/material';
import Buscar from './components/Buscar';
import ClimaActual from './components/ClimaActual';
import Pronostico from './components/Pronostico';
import { useWeather } from './hooks/usoClima';

// Componente principal de la aplicación
const App: React.FC = () => {
  const [city, setCity] = useState<string>('London');
  const { weather, forecast, loading, error } = useWeather(city);

  const handleSearch = (searchCity: string) => {
    setCity(searchCity);
  };

  return (
    <Container style={{ marginTop: '20px' }}>
      <Typography variant="h3" gutterBottom>
        Clima Web
      </Typography>
      <Buscar onSearch={handleSearch} />
      {loading && <CircularProgress />}
      {error && <Typography color="error">{error}</Typography>}
      {weather && <ClimaActual weather={weather} />}
      {forecast && <Pronostico forecast={forecast} />}
    </Container>
  );
};

export default App;*/