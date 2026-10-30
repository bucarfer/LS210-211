// easy -3
// easy2 -5, -7, -9(almost correct)

// My solution for easy 2 10
function century(num) {
    let cent = parseInt(((num -1) / 100) + 1); // alternative >> Math.floor(year / 100) + 1
    cent = String(cent)

    if (cent.endsWith('1') && !cent.endsWith('11')) {
        cent += 'st';
    } else if (cent.endsWith('2') && !cent.endsWith('12')) {
        cent += 'nd';
    } else if (cent.endsWith('3') && !cent.endsWith('13')) {
        cent += 'rd';
    } else {
        cent += 'th';
    }

    return cent;
}

