import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

interface SearchBarProps {
  onSearch: (city: string) => void;
}

// Componente de la barra de búsqueda para buscar el clima por ciudad
const Buscar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [city, setCity] = useState<string>('');

  // Maneja el evento de búsqueda
  const handleSearch = () => {
    onSearch(city);
  };

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={8}>
        <TextField
          label="Buscar ciudad"
          variant="outlined"
          fullWidth
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </Grid>
      <Grid item xs={4}>
        <Button 
          variant="contained" 
          color="primary" 
          fullWidth 
          onClick={handleSearch}
        >
          Buscar
        </Button>
      </Grid>
    </Grid>
  );
};

export default Buscar;
