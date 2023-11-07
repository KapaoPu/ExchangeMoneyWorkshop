let city = 'Bangkok';
const apikey = "f42500ea8383f8430428c77d044ff323";

const form = document.getElementById('form')
const search = document.getElementById('search')
const weathericon = document.getElementById('weather-icon')

console.log("Image credit : Jason Dwayne")
async function showWather(){
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
        const response = await fetch(url);
        const data = await response.json();
        showDataToUI(data)
    } catch (error) {
        console.log(error);
    }
}
function showDataToUI(data){
    console.log(data);
    const city = document.getElementById('city')
    const state = document.getElementById('state')
    const weather = document.getElementById('weather')
    const status = document.getElementById('status')
    const humidity = document.getElementById('humidity')
    const wind = document.getElementById('wind')

    city.innerText = data.name
    state.innerText = data.sys.country
    weather.children[0].innerHTML = calculate(parseInt(data.main.temp))+" C&deg;"
    weather.children[1].innerHTML = `max : ${calculate(parseInt(data.main.temp_max))}  C&deg; min : ${calculate(parseInt(data.main.temp_min))}  C&deg;`
    status.innerText = data.weather[0].description
    humidity.innerText = 'humidity : ' +data.main.humidity
    wind.innerText = 'wind : ' +data.wind.speed
    if (data.weather[0].main == 'Clouds' || data.weather[0].main == 'Clear'){
        weathericon.src = 'clouds.gif'
    }
    else if(data.weather[0].main == 'Snow'){
        weathericon.src = 'snow.gif'
    }
    else if(data.weather[0].main == 'Rain' || data.weather[0].main == 'Drizzle'){
        weathericon.src = 'rain.gif'  
    }
    else if(data.weather[0].main == 'Mist'){
        weathericon.src = 'mist.gif'
    }
    else if(data.weather[0].main == 'Tornado' || data.weather[0].main == 'Squall'){
        weathericon.src = 'tornado.gif'
    }
    else if(data.weather[0].main == 'Ash'){
        weathericon.src = 'volcano.gif'
    }
    else if(data.weather[0].main == 'Dust' || data.weather[0].main == 'Sand'){
        weathericon.sec = 'wind.gif'
    }
    else if(data.weather[0].main == 'Fog' || data.weather[0].main == 'Haze' || data.weather[0].main == 'Smoke'){
        weathericon.sec = 'foggy.gif'
    }
}

function calculate(k){
    return k - 273
}
function calldataAPI(e){
    e.preventDefault()
    city = search.value
    showWather()
}
form.addEventListener('submit',calldataAPI)