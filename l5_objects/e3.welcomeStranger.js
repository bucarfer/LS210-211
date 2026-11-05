function greetings(args, obj) {
  let fullName = ""
  for (let i = 0; i < args.length; i++) {
    if (i !== 0) {
      fullName += ' ';
    }
    fullName += args[i];
  }
  console.log(`Hello, ${fullName}! Nice to have a ${obj['title']} ${obj['occupation']} around.`)
}

greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });

// console output
// Hello, John Q Doe! Nice to have a Master Plumber around.

// LS solution
function greetings(name, status) {
  let nameGreet = 'Hello, ' + name.join(' ') + '!';
  let statusGreet = 'Nice to have a ' + status.title + ' ' + status.occupation + ' around.';

  console.log(nameGreet + ' ' + statusGreet);
}