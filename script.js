const apiKey = 'f1aea807937307d77ce76d12fbb82684'; // Replace with your OpenWeatherMap API key

document.getElementById('getWeatherBtn').addEventListener('click', () => {
    const location = document.getElementById('locationInput').value;
    if (location) {
        getWeather(location);
    } else {
        alert('Please enter a location.');
    }
});

function getWeather(location) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric')
        .then(response => response.json())
        .then(data => {
            console.log(data); // Log the response data for debugging
            if (data.cod === 200) {
                displayWeather(data);
            } else {
                alert('Location not found.');
            }
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
            alert('Error fetching the weather data.');
        });
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weatherInfo');
    const weatherStatus = document.getElementById('weatherStatus');
    const temperature = document.getElementById('temperature');
    const humidity = document.getElementById('humidity');

    weatherStatus.innerText = `Weather: ${data.weather[0].description}`;
    temperature.innerText = `Temperature: ${data.main.temp}°C`;
    humidity.innerText = `Humidity: ${data.main.humidity}%`;

    weatherInfo.style.display = 'block';
}
