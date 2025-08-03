
async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "f5de8b17007d9842b6e2d18a11c42111"; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (data.cod !== 200) {
        document.getElementById("weatherInfo").innerHTML = `<p>City not found.</p>`;
        return;
      }
  
      const temp = data.main.temp;
      const weather = data.weather[0].description;
      const icon = data.weather[0].icon;
      const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  
      document.getElementById("weatherInfo").innerHTML = `
        <h3>${data.name}</h3>
        <img class="weather-icon" src="${iconUrl}" alt="Weather icon" />
        <p><strong>${temp}&deg;C</strong></p>
        <p>${weather}</p>
      `;
    } catch (error) {
      document.getElementById("weatherInfo").innerHTML = `<p>Error fetching data.</p>`;
    }
  }
  