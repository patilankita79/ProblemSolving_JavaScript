function palindrome(str) {
    // every() calls callback function for each element in the array until callback function returns false or until the end of array
    return str.split('').every((character, i) => {
        return character === str[str.length - i -1];
    });
}

console.log(palindrome("aba"));
console.log(palindrome("aba "));