// 1. Write a function named objectHasProperty that takes two arguments: an Object and a String. The function should return true if the Object contains a property with the name given by the String, false otherwise.

function objectHasProperty(obj, string) {
    if (obj[string] !== undefined) {
        return true
    }

    return false
}

let pets = {
  cat: 'Simon',
  dog: 'Dwarf',
  mice: null,
};

console.log(objectHasProperty(pets, 'dog'));       // true
console.log(objectHasProperty(pets, 'lizard'));    // false
console.log(objectHasProperty(pets, 'mice'));      // true

// LS solution

function objectHasProperty(object, propertyName) {
  let keys = Object.keys(object);
  return keys.indexOf(propertyName) !== -1;
}

// 2. Write a function named incrementProperty that takes two arguments: an Object and a String. If the Object contains a property with the specified name, the function should increment the value of that property. If the property does not exist, the function should add a new property with a value of 1. The function should return the new value of the property.

function incrementProperty(obj, propertyName) {
    let keys = Object.keys(obj);

    if (keys.indexOf(propertyName) !== -1) {
        obj[propertyName] += 1;
    } else {
        obj[propertyName] = 1;
    }

    return obj[propertyName];
}

let wins = {
  steve: 3,
  susie: 4,
};

console.log(incrementProperty(wins, 'susie'));   // 5
console.log(wins);                               // { steve: 3, susie: 5 }
console.log(incrementProperty(wins, 'lucy'));    // 1
console.log(wins);                               // { steve: 3, susie: 5, lucy: 1 }

// LS solution
function incrementProperty(object, propertyName) {
  if (object[propertyName]) {
    object[propertyName] += 1;
  } else {
    object[propertyName] = 1;
  }

  return object[propertyName];
}

// 3. Write a function named copyProperties that takes two Objects as arguments. The function should copy all properties from the first object to the second. The function should return the number of properties copied.

function copyProperties(obj1, obj2) {
    let count = 0;

    for (let property in obj1) {
        obj2[property] = obj1[property];
        count += 1;
    }

    return count;
}

let hal = {
  model: 9000,
  enabled: true,
};

let sal = {};
console.log(copyProperties(hal, sal));  // 2
console.log(sal);                       // { model: 9000, enabled: true }

// 4. Write a function named wordCount that takes a single String as an argument. The function should return an Object that contains the counts of each word that appears in the provided String. In the returned Object, you should use the words as keys, and the counts as values.

function wordCount(string) {
    let object = {};
    let words = string.split(' ')

    for (let i = 0; i < words.length; i++) {
        if (object[words[i]]) {
            object[words[i]] += 1
        } else {
            object[words[i]] = 1
        }
    }

    return object;
}

console.log(wordCount('box car cat bag box'));  // { box: 2, car: 1, cat: 1, bag: 1 })

// LS solution

function wordCount(text) {
  let count = {};
  let words = text.split(' ');

  for (let index = 0; index < words.length; index += 1) {
    let word = words[index];
    if (!count[word]) {
      count[word] = 0;
    }

    count[word] += 1;
  }

  return count;
}