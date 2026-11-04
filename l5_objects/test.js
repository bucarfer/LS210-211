let today = new Date() // new object

function formatTime(date) {
  return addZero(date.getHours()) + ':' + addZero(date.getMinutes());
}

function addZero(value) {
  let timeComponent = String(value);
  return timeComponent.length < 2 ? '0' + timeComponent : timeComponent;
}

// Date value passed: 2013-03-01T01:10:00
console.log(formatTime(new Date(2013, 2, 1, 1, 10)));