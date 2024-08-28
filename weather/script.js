const apiKey = '13d120652b8c8ca431bd81905a3cac05'; // Replace with your OpenWeatherMap API key

function getWeather() {
    const city = document.getElementById('cityInput').value;
    if (city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(data => displayWeather(data))
            .catch(error => alert("City not found or unable to fetch data."));
    } else {
        alert("Please enter a city name.");
    }
}

function displayWeather(data) {
    document.getElementById('cityName').innerText = `Weather in ${data.name}`;
    document.getElementById('condition').innerText = `Condition: ${data.weather[0].description}`;
    document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}°C`;
    document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}%`;
}
