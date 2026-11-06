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



console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}