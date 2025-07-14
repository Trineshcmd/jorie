const WeatherCard = ({ weatherData }) => {
    if (!weatherData) return null;

    const { name, main, weather } = weatherData;
    const temperature = (main.temp - 273.15).toFixed(2); // Convert Kelvin to Celsius
    const weatherDescription = weather[0].description;
    const icon = weather[0].icon;

    return (
        <div className="weather-card">
            <h2>{name}</h2>
            <p>Temperature: {temperature} °C</p>
            <p>Description: {weatherDescription}</p>
            <img src={`http://openweathermap.org/img/wn/${icon}.png`} alt={weatherDescription} />
        </div>
    );
};

export default WeatherCard;
