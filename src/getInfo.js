import lookWeather from './weatherAPI';

const form = document.querySelector('form');
const input = document.querySelector('#city-input');
const radioInput = document.querySelector('#metric');

const getCity = () => {
  let city;
  let system;
  form.onsubmit = () => {
    city = input.value;
    input.value = '';
    if (radioInput.checked) {
      system = 'metric';
    } else {
      system = 'imperial';
    }
    lookWeather(city, system);
    return false;
  };
};

export default getCity;