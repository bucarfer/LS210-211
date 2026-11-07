// Easy 4 problems wrong: 1 (math.random), 3 (Dates), 9(letter count)
// Easy 5 problems wrong: 1
// Easy 6 problems wrong: 3(small mistake), 4(middle char), 10 (reverse part 2, minor mistake)

// 3 dates
const readline = require('readline-sync');

today = new Date();

let current = Number(readline.question('What is your age? '));
let goal = Number(readline.question('At what age would you like to retire? '));

let left = goal - current;

console.log(`It's ${today.getFullYear()} You will retire in ${today.getFullYear() + left}.`);
console.log(`You have only ${left} years of work to go!`);

// 10 count non alpha words
function isalpha(char) {
    return char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z';
}

function wordSizes(string) {
    let words = string.split(' ');
    let newObj = {};

    for (let word of words) {
        let alphaWord = '';
        for (let char of word) {
            if (isalpha(char)) {
                alphaWord += char;
            }
        }
        if (alphaWord.length === 0) {
            continue;
        }
        newObj[alphaWord.length] = newObj[alphaWord.length] || 0;
        newObj[alphaWord.length] += 1;
        }

    return newObj;
}