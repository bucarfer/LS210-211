// 1. Create a variable named today with the current date and time as its value.

let today = Date()
console.log(today); // Wed Nov 04 2026 13:08:52 GMT+0100 (Central European Standard Time)

// 2. Log a string, "Today's day is 5", that tells the current day of the week as a number between 0 and 6 (Sunday is 0, Saturday is 6). Use the getDay method to obtain the number of the day of week.

let today = new Date() // 2026-11-04T12:09:12.596Z
// we need new to create a date object and be able to call methods on it. Without it it JS creates a string with the information of today's date as shown above.

let todayDay = today.getDay()
console.log(`Today's day is ${todayDay}`); //Today's day is 3

// 3. The getDay method, like many of the get methods on the date object, returns a zero-based index of the current day of week instead of the day name. This enables support for multiple locales and formats. Modify the output message of the previous problem to show the 3-letter day name abbreviation. You may use the following array:

let today = new Date() // new object
let todayDay = today.getDay()

let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
console.log(`Today's day is ${daysOfWeek[todayDay]}`); //Today's day is 3

// 4.Let's add the calendar date (the day of month) to our log message: "Today's date is Mon, the 6th". Use the getDate method to obtain the current day of month. Don't worry about using different suffixes for numbers that end with 1, 2, or 3 just yet; we'll deal with that in the next problem.
// 5. Ideally, the suffix on the day number needs to adjust to the proper suffix for days like the 1st, 22nd, and 3rd. Write a function named dateSuffix that takes the day of month as a numeric value and returns the formatted day of month and suffix. Make sure you use the correct suffixes.
// 6. Change your output to include the value from the getMonth method. Thus, the logged string will read "Today's date is Mon, 11 6th", where 11 is the month number returned by getMonth.
// 7. Let's make the month readable. Using the same technique we used in problem 3, convert the month number in the output string to a 3-letter month name abbreviation. You may use the following array:

let today = new Date() // new object
let todayDay = today.getDay()
let dayMonth = today.getDate()
let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let Month = today.getMonth()
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function dateSuffix(num) {
  if (String(num).endsWith(1) && num !== 11) {
    return String(num) + 'st';
  } else if ((num === 2) || (num === 22)) {
    return String(num) + 'nd';
  } else if ((num === 3) || (num === 23)) {
    return String(num) + 'rd';
  } else {
    return String(num) + 'th';
  }
}

console.log(`Today's day is ${daysOfWeek[todayDay]}, ${Month} ${dateSuffix(dayMonth)}`);

// 8. Our call to console.log is getting cluttered. Let's clean things up a bit and refactor the code into a few formatting functions that we can call from anywhere in our code. Create formattedMonth and formattedDay functions to format the month and day, then write a formattedDate function that pulls everything together and logs the fully formatted date.

let currentDate = new Date() // new object

function formattedMonth(date) {
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return months[date.getMonth()];
}

function formattedDay(date) {
  let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return daysOfWeek[date.getDay()];
}

function dateSuffix(num) {
  if (String(num).endsWith(1) && num !== 11) {
    return String(num) + 'st';
  } else if ((num === 2) || (num === 22)) {
    return String(num) + 'nd';
  } else if ((num === 3) || (num === 23)) {
    return String(num) + 'rd';
  } else {
    return String(num) + 'th';
  }
}

function formattedDate(date) {
  let day = formattedDay(date);
  let month = formattedMonth(date);

  return `Today's date is ${day}, ${month} ${dateSuffix(date.getDate())}`;
}

console.log(formattedDate(currentDate));

// Always use getFullYear()

let tomorrow = new Date(today.getTime());
tomorrow.setDate(today.getDate() + 1);
formattedDate(tomorrow);

let nextWeek = new Date(today.getTime());

nextWeek.setDate(today.getDate() + 7);

// 14. Finally, write a function named formatTime that takes a date object as an argument and returns a string formatted with the hours and minutes as "15:30". Make sure you handle the case where the hours or minutes has only one digit: you need to pad the value with a leading zero in such cases, e.g., "03:04". You can use the getHours and getMinutes methods to obtain the hours and minutes.

function formatTime(date) {
  return addZero(date.getHours()) + ':' + addZero(date.getMinutes());
}

function addZero(value) {
  let timeComponent = String(value);
  return timeComponent.length < 2 ? '0' + timeComponent : timeComponent;
}

// Date value passed: 2013-03-01T01:10:00
console.log(formatTime(new Date(2013, 2, 1, 1, 10)));