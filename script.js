const apiKey = "3f676997428b40cf6f76f3f14f245d3b";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkweather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();
  console.log(data);
  document.querySelector(
    ".loc"
  ).innerHTML = `<i class="fa-solid fa-location-dot fa-bounce"></i> ${data.name}`;

  document.querySelector(".lat").innerHTML = data.coord.lat;
  document.querySelector(".lon").innerHTML = data.coord.lon;

  let temp = document.querySelector(".temp");
  document.querySelector(".feel").innerHTML = data.main.feels_like;
  document.querySelector(".min").innerHTML = data.main.temp_min;
  document.querySelector(".max").innerHTML = data.main.temp_max;
  document.querySelector(".pressure").innerHTML = data.main.pressure;
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".s-rise").innerHTML = data.sys.sunrise;
  document.querySelector(".s-set").innerHTML = data.sys.sunset;
  document.querySelector(".speed").innerHTML = data.wind.speed + "km/hr";
  temp.innerHTML = Math.round(data.main.temp) + "°C";
}
console.log("working...");
searchBtn.addEventListener("click", () => {
  checkweather(searchBox.value);
});
