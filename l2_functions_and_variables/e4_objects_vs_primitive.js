// Question 1
// What will the following code log to the console and why? Don't run it until you have tried to answer.

let myWord = 'Hello';
myWord.concat(' there.');

console.log(myWord);

// Hello
// Calling concat on the string returns a new string with the string there. appended to it. This doesn't affect the original string, and we don't do anything with the return value.

// Question 2

let myWord = 'Hello';
myWord.repeat(3);
console.log(myWord);
myWord.replace('H', 'J');
console.log(myWord);
myWord.split(' ');
console.log(myWord);

// Hello
// Hello
// Hello
// This is the same string in each case, and it isn't affected by any of the intervening method invocations (repeat, replace, and split), each of which return a new string

// Question 3

let myWords = ['Hello'];
myWords.push('Goodbye');

console.log(myWords);

// [ 'Hello', 'Goodbye' ]
// The value assigned to the myWords variable is an array. Arrays are reference types and therefore mutable. The Array.push method mutates the array by adding an element to it, so that when we log myWords we get the mutated array.

// Question 4

let myWords = ['Hello'];
myWords.concat(['Goodbye']);

console.log(myWords);

// This logs [ 'Hello' ] to the console. Although myWords is assigned to an array, which is a reference type and therefore mutable, the Array.concat method doesn't mutate the array it is called on; it instead returns a new array.

// Question 5

let myWords = ['Hello'];
myWords[0].toUpperCase();

console.log(myWords);

// [ 'Hello' ]
// This logs [ 'Hello' ] to the console. Although myWords is assigned to an array, which is a reference type and therefore mutable, we're actually calling the toUpperCase() method on the string at index 0 of the array. Being primitive types, strings are immutable, so the method has no effect on the string (it instead returns a new string)

// Question 6

let myWords = ['Hello'];
myWords[0] = myWords[0].toUpperCase();

console.log(myWords);

// This logs [ 'HELLO' ]
// Unlike the previous example, here we are mutating the array by changing the value at index 0. It's important to note that we aren't mutating the original string, but instead setting the value at index 0 to a new string