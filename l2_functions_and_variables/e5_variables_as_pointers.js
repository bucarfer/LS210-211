// Question 1
// What will the following code log to the console and why? Don't run it until you have tried to answer.

let myWord = 'Hello';
let myOtherWord = myWord;

console.log(myWord);


// 'Hello' twice.
// The myWord variable is initialized to the string 'Hello'. On line 2, we assign myOtherWord to myWord. At this point, both variables point to a string with the value of 'Hello'; it's important to note though, even though the strings have the same value they are different strings stored at different memory addresses.

// Question 2

let myWord = 'Hello';
let myOtherWord = myWord;
myWord = 'Goodbye';

console.log(myWord);
console.log(myOtherWord);

// This logs the string 'Goodbye' and then the string 'Hello'.

// This is very similar to Exercise 1 with one key difference: on line 3 we re-assign myWord to the string 'Goodbye'. As with Example 1, when we reach line 2 both variables are pointing to a string with the value of 'Hello', but these strings exist at different addresses in memory. By re-assigning the myWord variable on line 3, we are changing what is stored at the memory address myWord points to.

// Question 3
let myWords = ['Hello', 'Goodbye'];
let myOtherWords = myWords;
myWords[0] = 'Hi';

console.log(myWords);
console.log(myOtherWords);

// This logs the array [ 'Hi', 'Goodbye' ] twice.
// With reference types, the value stored in memory that the variable points to is a reference to another location in memory. After line 2, both variables have as their value the memory address where the array is stored.
// On line 3, we're not re-assigning the myWords variable, instead we're changing the value of one of the array elements that the myWords variable references.

// Question 4
let myWords = ['Hello', 'Goodbye'];
let myOtherWords = myWords;
myWords = ['Hi', 'Bye'];

console.log(myWords);
console.log(myOtherWords);

// This logs the array [ 'Hi', 'Bye' ], and then the array ['Hello', 'Goodbye'].
// As with Exercise 3, we're again dealing with a reference type. Again, after line 2, both variables have as their value the memory address where the array is stored. In this exercise though, line 3 re-assigns the myWords variable to a different value. In this case we're re-assigning it to another array, but we could equally have re-assigned it to a primitive value.

// Question 5
let myWords = ['Hello', 'Goodbye'];
let myWord = myWords[0];
myWords[0] = 'Hi';

console.log(myWords);
console.log(myWord);

// This logs the array [ 'Hi', 'Goodbye' ], and then the string 'Hello'.
// On line 1 we declare and initialize the variable myWords to an array containing two elements, the strings 'Hello' and 'Goodbye'.
// On line 2 we declare and initialize another variable, myWord, to the element at index 0 of the array referenced by myWords, which is the string 'Hello'. Because that string is a primitive type, index 0 of the array and the myWord variable each reference different strings at different memory addresses, even though those strings have the same value.
// On line 3 we re-assign index 0 of the myWords array to a new value, the string 'Hi'. This changes the value stored at index 0 of the array, but has no effect on the value stored by the myWord variable.
// When we log the value of myWords and myWord on line 5 and 6, we can see that the myWords array has the string 'Hi' at index 0 and myWord has a value of 'Hello'.

// Question 6
let myWords = ['Hello', 'Goodbye'];
let myWord = 'Hi';
myWords[0] = myWord;
myWord = 'Hello';

console.log(myWords);
console.log(myWord);

// This logs the array [ 'Hi', 'Goodbye' ], and then the string 'Hello'.