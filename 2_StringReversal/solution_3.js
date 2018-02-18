// String reversal 

function reverseString(str) {

    // reduce method calls the callback function one time for every element in the array
    return str.split('').reduce((reversedString, character) => character + reversedString, '');
}

console.log(reverseString('Good Morning!!'));