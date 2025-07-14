import React from 'react';

const WeatherCard = ({ data }) => {
  const {
    name,
    main: { temp, feels_like, humidity },
    weather,
    wind,
  } = data;

  const icon = weather[0].icon;
  const description = weather[0].description;

  const toCelsius = (k) => (k - 273.15).toFixed(1);

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={description}
      />
      <p><strong>{description}</strong></p>
      <p>🌡 Temp: {toCelsius(temp)}°C</p>
      <p>🤒 Feels Like: {toCelsius(feels_like)}°C</p>
      <p>💧 Humidity: {humidity}%</p>
      <p>💨 Wind: {wind.speed} m/s</p>
    </div>
  );
};

export default WeatherCard;
