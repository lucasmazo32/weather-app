import domChanges from './domChanges';
import gif from './gifApi';

const noCity = document.querySelector('.no-city');

const lookWeather = async (city, system) => {
  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=cbf4a4769da6bbf794164c449e463b35&units=${system}`);
  const data = await response.json();
  if (data.cod === '404') {
    noCity.innerHTML = 'Oops, seems like the city does not exist.';
  } else {
    noCity.innerHTML = '';
    domChanges(data, system);
    gif(data.weather[0].description);
  }
};

export default lookWeather;