import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './component/SearchBar';
import WeatherCard from './component/WeatherCard';
import ThemeToggle from './component/ThemeToggle';
import './App.css';

const App = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [theme, setTheme] = useState('light');

    const fetchWeather = async (city) => {
        try {
            const response = await axios.get(`http://127.0.0.1:5000/api/weather`);
            setWeatherData(response.data);
            localStorage.setItem('lastCity', city);
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    };

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    useEffect(() => {
        const lastCity = localStorage.getItem('lastCity');
        if (lastCity) {
            fetchWeather(lastCity);
        }
    }, []);

    return (
        <div className={`app ${theme}`}>
            <ThemeToggle toggleTheme={toggleTheme} />
            <SearchBar onSearch={fetchWeather} />
            <WeatherCard weatherData={weatherData} />
        </div>
    );
};

export default App;
