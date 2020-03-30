import domChanges from './domChanges';

const lookWeather = async (city, system) => {
  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=cbf4a4769da6bbf794164c449e463b35&units=${system}`);
  const data = await response.json();
  if (data.cod === '404') {
    console.log('Oops, seems like the city does not exist.');
  } else {
    domChanges(data, system);
  }
};

export default lookWeather;