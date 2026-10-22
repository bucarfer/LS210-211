// Please predict the output of the following programs, and explain why they output what they do.

1.
function say() {
  if (false) {
    var a = 'hello from inside a block';
  }

  console.log(a);
}

say();

// undifined, variable `a` exist but has not any value assigned.

// The scope of variables declared with var is function-level, not block-level. Therefore, after hoisting, this code becomes:

// function say() {
//   var a;
//   if (false) {
//     a = 'hello from inside a block';
//   }

//   console.log(a);
// }

// say();

2.
function say() {
  if (false) {
    let a = 'hello from inside a block';
  }

  console.log(a);
}

say();

// ReferenceError: a is not defined
// since scope of variables defined with let is block-level and variable `a` does not exist outside if block

3.
function hello() {
  a = 'hello';
  console.log(a);

  if (false) {
    var a = 'hello again';
  }
}

hello();
console.log(a);

// hello
// Uncaught ReferenceError: a is not defined


// After hoisting:

// function hello() {
//   var a;
//   a = 'hello';

//   console.log(a);

//   if (false) {
//     a = 'hello again';
//   }
// }

// hello();
// console.log(a);

// Because we use var, a's scope is the body of hello. Since there is no global variable named a, line 13 raises an error.

4.

function hello() {
  a = 'hello';
  console.log(a);

  if (false) {
    let a = 'hello again';
  }
}

hello();
console.log(a);

// hello
// hello

// Since we use let inside the if statement, variable `a` is not declared in line 2 and a = 'hello' creates a global variable named `a` that can be accessed from inside and outside the function

5.
var a = 'hello';

for (var index = 0; index < 5; index += 1) {
  var a = index;
}

console.log(a);

// 4
// JavaScript hoists the variable declaration on line 4 to the top of the global scope. Since a global variable named a exists, the hoist has no direct effect on operation. Inside the loop, a gets assigned five times; at the end of the loop, it has a value of 4. Thus, line 7 logs 4.

6.
let a = 'hello';

for (let index = 0; index < 5; index += 1) {
  let a = index;
}

console.log(a);

// hello
// Let uses block scope. In this code, we have two different a variables: one in the outer scope, and one in the inner scope. The declaration on line 4 creates and initializes the inner-scoped variable. On line 7, we output the value of the a variable declared on line 1. That variable still has the value 'hello', so line 7 outputs hello.

7.
let a = 1;

function foo() {
  a = 2;
  let bar = function() {
    a = 3;
    return 4;
  };

  return bar();
}

console.log(foo());
console.log(a);

// 4
// 3
// The foo function returns the return value of the bar function, which is 4. During this process, the code changes the global variable twice. Thus, the final value is 3.

8. 8*** HARD variable a does not change the global becuase there is another a in the outer function??

var a = 'global';

function checkScope() {
  var a = 'local';
  const nested = function() {
    var a = 'nested';
    let superNested = () => {
      a = 'superNested';
      return a;
    };

    return superNested();
  };

  return nested();
}

console.log(checkScope());
console.log(a);

// superNested
// global
// With super-nested functions, you must chase through the functions starting with the function invocations. Here, we start with line 18, the first function invocation. From there, line 4 goes to line 5, line 5 to line 15, and so on through lines 6, 7, 12, 8, and 9. Line 9 obviously returns 'superNested', so line 12 must return 'superNested' too. This takes us back to line 15 which also returns 'superNested'. Finally, line 18 receives the final return value ('superNested') and logs it. During this entire process, we never modify the global a, so it still has the value global.

// Remember, var declarations are function-scoped, so each of the var declarations within this problem are declared within their own individual scope. The last var declaration, 'nested' is reassigned on line 8.

9.
let a = 'outer';
let b = 'outer';

console.log(a);
console.log(b);
setScope(a);
console.log(a);
console.log(b);

function setScope(foo) {
  foo = 'inner';
  b = 'inner';
}

outer
outer
outer
inner
// Function arguments become local variables in the function, so assigning to an argument has no effect on the original argument.

10.
let total = 50;
let increment = 15;

function incrementBy(increment) {
  total += increment;
}

console.log(total);
incrementBy(10);
console.log(total);
console.log(increment);

// 50
// 60
// 15
// Though our parameter has the same name as the variable declared on line 2, it is not the same variable. Function parameters are locally scoped variables, even when they have the same names as variables defined in the outer scope.

11.
let a = 'outer';

console.log(a);
setScope();
console.log(a);

var setScope = function () {
  a = 'inner';
};

outer
Uncaught TypeError: setScope is not a function(…)

with hoisting

var setScope;

let a = 'outer';

console.log(a);
setScope();
console.log(a);

setScope = function () {
  a = 'inner';
};

// Line 6 tries to call setScope as a function. However, setScope is just a declared global variable whose value is undefined. Note that unlike function declarations, with function expressions using var, the name of the function is hoisted, but not the function body.