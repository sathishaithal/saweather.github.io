
const apiKey="e8739e516df0d8afe0da72d122c42401";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weathericons=document.querySelector(".weather-icon")


async function checkWeather(city){
    const response=await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data=await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + " km/h";


    // const firstWeatherObject = weather[0];
    // const main = firstWeatherObject.main;


    if(data.weather[0].main=="Clouds"){
        weathericons.src = "img/cloud.png";
    }
    else  if(data.weather[0].main=="Clear"){
        weathericons.src = "img/sun.png";
    }
    else  if(data.weather[0].main=="Rain"){
        weathericons.src = "img/rain-weather.png";
    }
    else  if(data.weather[0].main=="Drizzle"){
        weathericons.src = "img/rain-cloud.png";
        }
    else  if(data.weather[0].main=="Mist"){
        weathericons.src = "img/mist.png";
    }
    else  if(data.weather[0].main=="Haze"){
        weathericons.src = "img/haze.png";
    }


    // document.querySelector(".weath").innerHTML=data.weather[0].main;

    
}

searchBtn.addEventListener("click",()=>{
checkWeather(searchBox.value);

})
