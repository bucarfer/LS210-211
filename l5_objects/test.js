function reverseWords(str) {
    let revArr = str.split(' ');
    let final = []

    for (let word of revArr) {
        if (word.length >= 5) {
            final.push(word.split('').reverse().join(''));
        } else {
            final.push(word);
        }
    }

    return final.join(' ');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"