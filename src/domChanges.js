import getDate from './getDate';

const cityName = document.querySelector('.city-name');
const container = document.querySelector('.city-info');
const imgCondition = document.querySelector('.condition');
const tempUnits = document.querySelectorAll('.temp-unit');
const minTemp = document.querySelector('.min-temp');
const maxTemp = document.querySelector('.max-temp');
const currTemp = document.querySelector('.curr-temp');
const textCondition = document.querySelector('.text-condition');
const humidity = document.querySelector('.humidity');
const tempFeel = document.querySelector('.temp-feel');

const tempDom = (system) => {
  if (system === 'metric') {
    tempUnits.forEach((span) => {
      span.innerHTML = '°C';
    });
  } else {
    tempUnits.forEach((span) => {
      span.innerHTML = '°F';
    });
  }
};

const unactiveToggle = (allElements) => {
  allElements.forEach((element) => {
    if (element.classList.contains('unactive')) {
      element.classList.toggle('unactive');
    } else {
      element.classList.toggle('unactive');
      window.setTimeout(() => {
        element.classList.toggle('unactive');
      }, 500);
    }
  });
};

const domChanges = (data, system) => {
  cityName.innerHTML = `${data.name}, ${data.sys.country}`;
  imgCondition.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  currTemp.innerHTML = parseInt(data.main.temp);
  minTemp.innerHTML = parseInt(data.main.temp_min);
  maxTemp.innerHTML = parseInt(data.main.temp_max);
  textCondition.innerHTML = data.weather[0].description;
  humidity.innerHTML = data.main.humidity;
  tempFeel.innerHTML = parseInt(data.main.feels_like);
  unactiveToggle([container]);
  tempDom(system);
  getDate();
};

export default domChanges;