function getWeather() {
    const locationInput = document.getElementById('location').value;
    const apiKey = 'c1065e309aa4d1057856513c15003c83'; // Replace 'YOUR_API_KEY' with your actual API key

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Jaipur}&appid=${apiKey}&units=metric`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Unable to fetch weather data. Please check your input.');
            }
            return response.json();
        })
        .then(data => {
            const weatherInfo = document.getElementById('weather-info');
            weatherInfo.innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            const weatherInfo = document.getElementById('weather-info');
            weatherInfo.innerHTML = `<p>${error.message}</p>`;
        });
}

