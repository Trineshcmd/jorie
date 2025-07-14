import React, { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import ToggleTheme from './components/ToggleTheme';
import './App.css';

function App() {
  const [city, setCity] = useState(localStorage.getItem('lastCity') || '');
  const [allWeatherData, setAllWeatherData] = useState([]);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    fetchAllWeather();
  }, []);

  useEffect(() => {
    if (city && allWeatherData.length) {
      findCityWeather(city);
    }
  }, [allWeatherData]);

  const fetchAllWeather = async () => {
    try {
      setLoading(true);
      setError('');
      const response = await fetch('http://127.0.0.1:5000/api/weather');
      if (!response.ok) throw new Error('Failed to fetch data');
      const data = await response.json();
      setAllWeatherData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const findCityWeather = (cityName) => {
    const matched = allWeatherData.find(
      (item) => item.name.toLowerCase() === cityName.toLowerCase()
    );

    if (matched) {
      setWeather(matched);
      setCity(cityName);
      localStorage.setItem('lastCity', cityName);
      setError('');
    } else {
      setWeather(null);
      setError('City not found');
    }
  };

  return (
    <div className={`app ${theme}`}>
      <ToggleTheme theme={theme} setTheme={setTheme} />
      <h1>Weather Dashboard</h1>
      <SearchBar onSearch={findCityWeather} defaultCity={city} />
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {weather && <WeatherCard data={weather} />}
    </div>
  );
}

export default App;
