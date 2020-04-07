const today = new Date();
const todayField = document.querySelector('.date-today');
const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const date = () => {
  todayField.innerHTML = `${weekDays[today.getDay()]}, ${today.getDate()} ${months[today.getMonth()]}`;
};

export default date;