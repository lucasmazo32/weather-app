// (`http://openweathermap.org/img/wn/${code}@2x.png`);
const cityName = document.querySelector('.city-name');
const imgCondition = document.querySelector('.condition');

const domChanges = (data) => {
  cityName.innerHTML = data.name;
  cityName.classList.toggle('unactive');
  imgCondition.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  imgCondition.classList.toggle('unactive');
};

const lookWeather = async (city, system) => {
  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=cbf4a4769da6bbf794164c449e463b35&units=${system}`);
  const data = await response.json();
  if (data.cod === '404') {
    console.log('Oops, seems like the city does not exist.');
  } else {
    domChanges(data);
  }
};

export default lookWeather;