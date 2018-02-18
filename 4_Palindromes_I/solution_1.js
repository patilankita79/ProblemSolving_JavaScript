function palindrome(str) {
    let reveredString = reverseString(str);

    if(reveredString === str) {
        return true;
    } else {
        return false;
    }
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(palindrome("aba"));
console.log(palindrome("aba "));
console.log(palindrome("1010"));