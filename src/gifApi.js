const img = document.querySelector('.gif-image')

const weather = async (word) => {
  const regex = /\s/gi;
  const modWord = word.replace(regex, '+');
  const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=c9znHGogNj5Me5WjLdSCHgrxtXObyuOO&s=${modWord}`, {mode: 'cors'});
  const catData = await response.json();
  img.setAttribute('src', catData.data.images.original.url);
};

export default weather;