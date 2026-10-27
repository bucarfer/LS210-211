// Guessing the Password
// Write a PASSWORD guessing program that tracks how many times the user enters the wrong PASSWORD. If the user enters the PASSWORD wrong three times, log 'You have been denied access.' and terminate the program. If the PASSWORD is correct, log 'You have successfully logged in.' and end the program.

const PASSWORD = '123';
let count = 0;

while (true) {
  let result = prompt('What is the PASSWORD:');

  if (result === PASSWORD) {
      console.log('You have successfully logged in.');
      break;
  }

  count += 1

  if (count === 3) {
      console.log('You have been denied access.');
      break;
  }
}

// when using prompt we need to run it in the browser (Developer Tools)
