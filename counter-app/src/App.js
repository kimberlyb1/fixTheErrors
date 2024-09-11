import React, { useState, useEffect } from 'react';
import Counter from './components/Counter';
import Greeting from './components/Greeting';
import Loginstatus from './components/LoginStatus';
import TodoList from './components/TodoList';

import './WeatherApp.css';

function App() {
    const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  useEffect(() => {
    // Fetch data from the local JSON file
    fetch('/weatherData.json')
      .then((response) => response.json())
      .then((data) => setCities(data.cities))
      .catch((error) => console.error('Error fetching weather data:', error));
  }, []);

  // Handle city selection
  const handleCityChange = (event) => {
    const cityName = event.target.value;
    const cityData = cities.find((city) => city.name === cityName);
    setSelectedCity(cityData);
  };
    return (
        <div>
            <Counter />
            <Greeting />
            <Loginstatus />
            <TodoList />

            <h1>Weather App</h1>

      <select onChange={handleCityChange} defaultValue="">
        <option value="" disabled>Select a city</option>
        {cities.map((city) => (
          <option key={city.name} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>

      {selectedCity ? (
        <div className="weather-info">
          <h2>Weather in {selectedCity.name}</h2>
          <p>Temperature: {selectedCity.temperature}°C</p>
          <p>Description: {selectedCity.description}</p>
          <p>Humidity: {selectedCity.humidity}%</p>
          <p>Wind Speed: {selectedCity.wind} km/h</p>
        </div>
      ) : (
        <p>Please select a city to view the weather information.</p>
      )}

        </div>
    )
}

export default App
