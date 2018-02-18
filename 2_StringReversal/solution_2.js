// String reversal without using built-in functions

function reverseString(str) {
    let reversedString = '';

    for(character of str) {
        reversedString = character + reversedString;
    }

    return reversedString;
}

console.log(reverseString('Hello World!'));