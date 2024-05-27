// Tipo para los datos del clima actual
export interface WeatherData {
    main: {
      temp: number;
      humidity: number;
    };
    weather: [
    {
      description: string;
      icon: string;
    }];
    wind: {
      speed: number;
    };
    name: string;
  }
  
  // Tipo para los datos del pronóstico del tiempo
  export interface ForecastData {
    list: [{
      dt_txt: string;
      main: {
        temp: number;
      };
      weather: [{
        description: string;
        icon: string;
      }];
    }];
  }