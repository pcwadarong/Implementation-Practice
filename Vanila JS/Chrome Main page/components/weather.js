const API_key = "83ea069e65b3b6a65fc9fc24d98b82ad";

const onGeoOk = (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}℃`;
            city.innerText = data.name;
            
        });
}

const onGeoError = () => {
    alert("Can't Find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);