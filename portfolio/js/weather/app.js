async function fetchWeatherData() {
    const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Dublin&units=metric&appid=2e36f31b1146ad8813f4a891c96327bc');
    const data = await response.json();
    console.log(data);

    const summaryCell = document.querySelector('#table-weather-dublin tr:nth-child(1) td:nth-child(2)');
    summaryCell.textContent = data.weather[0].description;

    const tempCell = document.querySelector('#table-weather-dublin tr:nth-child(2) td:nth-child(2)');
    tempCell.textContent = data.main.temp + ' °C';

    const humidityCell = document.querySelector('#table-weather-dublin tr:nth-child(3) td:nth-child(2)');
    humidityCell.textContent = data.main.humidity + ' %';

    const pressureCell = document.querySelector('#table-weather-dublin tr:nth-child(4) td:nth-child(2)');
    pressureCell.textContent = data.main.pressure + ' hPa';
}

fetchWeatherData();


function change_background() {
    let d = new Date();
    let n = d.getHours();
    if (n >= 18 || n < 6) {
        document.body.style.backgroundImage = "url('https://example.com/assets/img/dublin-night.jpg')";
    } else {
        document.body.style.backgroundImage = "url('https://example.com/assets/img/dublin-day.jpg')";
    }
}
