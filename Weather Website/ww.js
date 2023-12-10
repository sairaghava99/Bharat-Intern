document.getElementById('get-weather').addEventListener('click', getWeather);

function getWeather() {
    const apiKey = 'cdacae1f7270168dd0d3097442a2a03c'; // Replace with your OpenWeatherMap API key
    const city = 'Hyderabad'; // Replace with the city for which you want to get weather data
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weather-info');
            if (data.cod === '404') {
                weatherInfo.innerHTML = `<p>Error: City not found</p>`;
            } else {
                const temperature = data.main.temp;
                const description = data.weather[0].description;
                const cityName = data.name;

                weatherInfo.innerHTML = `<p>Current weather in ${cityName}: ${temperature}°C, ${description}</p>`;
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            const weatherInfo = document.getElementById('weather-info');
            weatherInfo.innerHTML = `<p>Error fetching weather data. Please try again later.</p>`;
        });
}
