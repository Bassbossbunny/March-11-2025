fetch(
    'https://api.openweathermap.org/data/2.5/weather?q=Calgary&appid=09796eed5aac8e2b61d85550e8d833fd&units=metric'
)

.then(Response => Response.json())
.then(data => {
    console.log(data);
    console.log(data.main.temp);
        temperature.textContent = "Temperature: "+data.main.temp +" \u00B0C";

        description.textContent = "Description: "+data.weather[0].description+" today";

        humidity.textContent = "Humidity: "+data.main.humidity+ "%"

        LowHiTemp.textContent = "Forcasted today, a low of "+data.main.temp_min+"\u00B0C and a high of "+data.main.temp_max+"\u00B0C"

        FeelsLike.textContent = "It feels like "+data.main.feels_like+"\u00B0C"

// icon
const weatherIcon = "https://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png";
console.log(weatherIcon);

Icon.src = weatherIcon;


});

