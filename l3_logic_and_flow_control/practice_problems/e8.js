// Student Grade
// Write a program to determine a student’s grade based on the average of three scores you get from the user. Use these rules to compute the grade:

// If the average score is greater than or equal to 90 then the grade is 'A'
// If the average score is greater than or equal to 70 and less than 90 then the grade is 'B'
// If the average score is greater than or equal to 50 and less than 70 then the grade is 'C'
// If the average score is less than 50 then the grade is 'F'

let score1 = Number(prompt('Enter score 1:'));
let score2 = Number(prompt('Enter score 2:'));
let score3 = Number(prompt('Enter score 3:'));

let letter = 'F';

let averageScore = (score1 + score2 + score3) / 3;

if (averageScore >= 90) {letter = 'A';}
else if (averageScore >= 70 && averageScore < 90) {letter = 'B';}
else if (averageScore >=50 && averageScore < 70) {letter = 'C';}

console.log(`Based on the average of your 3 scores your letter grade is "${letter}".`);

// LS simplification:
let grade = 'F';
if (average >= 90) {
  grade = 'A';
} else if (average >= 70) {
  grade = 'B';
} else if (average >= 50) {
  grade = 'C';
}