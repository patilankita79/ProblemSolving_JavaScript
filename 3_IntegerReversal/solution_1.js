function reverseInt(n) {
    // Check for the sign of an integer
    let signInt = '';
    if(Math.sign(n) === -1) {
        signInt += '-';
    }

    // Converting a number to string
    let a = n.toString();

    // Concatenate sign of number, Reverse the string and convert the string back to integer
    let reversedInteger = parseInt(signInt + a.split('').reverse().join(''));

    return reversedInteger;
}

console.log(reverseInt(-123));