// Please predict the output of the following programs, and explain why they output what they do

// 1.

let a = 'outer';

function testScope() {
  let a = 'inner';
  console.log(a);
}

console.log(a);
testScope();
console.log(a);

// outer
// inner
// outer

// Line 8 is the first invocation of console.log; here, a is the global variable a from line 1. Line 9 calls the testScope function; in the function, a is a local variable on line 4, so line 5 logs inner. After testScope returns, the a on line 10 is the global variable on line 1 again; therefore, it logs outer

2.
let a = 'outer';

function testScope() {
  a = 'inner';
  console.log(a);
}

console.log(a);
testScope();
console.log(a);

outer
inner
inner

// On line 4, a is the global variable from line 1. The assignment assigns inner to the variable. Thus, line 10 logs inner instead of outer.

3.
let basket = 'empty';

function goShopping() {
  function shop1() {
    basket = 'tv';
  }

  console.log(basket);

  let shop2 = function() {
    basket = 'computer';
  };

  const shop3 = () => {
    let basket = 'play station';
    console.log(basket);
  };

  shop1();
  shop2();
  shop3();

  console.log(basket);
}

goShopping();

'empty'
'play station'
'computer'

// The first log operation occurs on line 8; here, basket still has its original value, empty. The function call on line 19 changes basket to tv, and the call on line 20 changes it to computer. The function call on line 21 does not alter the value of the basket global, but defines and sets a local variable with the same name. It then logs play station. Upon returning from shop3, the local variable goes away, so line 23 logs the value of the global basket: computer.

4.
function hello() {
  a = 'hi';
}

hello();
console.log(a);

// hi
// Here, we call the hello function, so we assign a value of hi to the variable. The variable is a global variable since we don't declare it with let, const, var, or function. Thus, line 6 logs hi

5.
function hello() {
  let a = 'hello';
}

hello();
console.log(a);

// Uncaught ReferenceError: a is not defined
// Since we don't define a global variable a, line 6 does not find any variables named a

6.
console.log(a);

var a = 1;

// undifined
// Since a does not have a value assigned until line 3

// after hoisting, this is equivalnt to
// var a;
// console.log(a);
// a = 1;

7.
console.log(a);

let a = 1;

ReferenceError, cannot access 'a' before initialization
JS can tell there is a variable `a`, but it is unset and cannot access

8.
console.log(a);

function hello() {
  a = 1;
}

// Uncaught ReferenceError: a is not defined

// After hoisting, this program is equivalent to:
// function hello() {
//   a = 1;
// }

// console.log(a);

// We define hello, but never call it, so we never assign a value to a. Since we also don't declare a anywhere, line 5 produces a ReferenceError.